<template>
  <div class="server-status">
    <div class="status-indicator" :class="statusClass">
      <span class="status-dot"></span>
      <span class="status-text">{{ statusText }}</span>
    </div>
    <div v-if="playerCount !== null && isOnline" class="player-count">
      <svg class="player-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
      <span>{{ playerCount }}/{{ maxPlayers }} Players</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  serverIp: string;
  serverPort: number;
  serverType?: 'fivem' | 'redm';
  checkInterval?: number; // in milliseconds
}

const props = withDefaults(defineProps<Props>(), {
  serverType: 'redm',
  checkInterval: 60000 // 1 minute default
});

const isOnline = ref<boolean | null>(null);
const playerCount = ref<number | null>(null);
const maxPlayers = ref<number | null>(null);
const isLoading = ref(true);

const statusClass = computed(() => {
  if (isLoading.value) return 'status-loading';
  if (isOnline.value === null) return 'status-unknown';
  return isOnline.value ? 'status-online' : 'status-offline';
});

const statusText = computed(() => {
  if (isLoading.value) return 'Checking...';
  if (isOnline.value === null) return 'Unknown';
  return isOnline.value ? 'Online' : 'Offline';
});

let intervalId: ReturnType<typeof setInterval> | null = null;

async function checkServerStatus() {
  try {
    isLoading.value = true;
    
    // Method 1: Only try FiveM API for FiveM servers (not RedM)
    if (props.serverType === 'fivem') {
      try {
        const response = await fetch(
          `https://servers-frontend.fivem.net/api/servers/single/${props.serverIp}:${props.serverPort}`,
          {
            headers: {
              'Accept': 'application/json',
            },
            signal: AbortSignal.timeout(5000)
          }
        );

        if (response.ok) {
          const data = await response.json();
          
               if (data.Data) {
                 isOnline.value = true;
                 playerCount.value = data.Data.clients || 0;
                 maxPlayers.value = data.Data.sv_maxclients || 32;
                 return;
               }
             }
           } catch (e) {
             // FiveM API failed, try alternative methods
           }
    }

    // Method 2: Try players.json (best for RedM - has actual player count)
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`http://${props.serverIp}:${props.serverPort}/players.json`)}`;
      const response = await fetch(proxyUrl, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const players = await response.json();
        
        if (Array.isArray(players)) {
          // Get server info for max players
          try {
            const infoUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`http://${props.serverIp}:${props.serverPort}/info.json`)}`;
            const infoResponse = await fetch(infoUrl, {
              signal: AbortSignal.timeout(5000)
            });
            
            if (infoResponse.ok) {
              const info = await infoResponse.json();
              isOnline.value = true;
              playerCount.value = players.length;
              maxPlayers.value = parseInt(info.vars?.sv_maxClients || info.vars?.sv_maxclients) || 32;
              return;
            }
          } catch (e) {
            // Info failed, but we have players
            isOnline.value = true;
            playerCount.value = players.length;
            maxPlayers.value = 32;
            return;
          }
        }
      }
    } catch (e) {
      // players.json failed, try next method
    }

    // Method 3: Try dynamic.json endpoint
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`http://${props.serverIp}:${props.serverPort}/dynamic.json`)}`;
      const response = await fetch(proxyUrl, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const data = await response.json();
        
               if (data && data.clients !== undefined) {
                 isOnline.value = true;
                 
                 // Parse player count
                 if (typeof data.clients === 'number') {
                   playerCount.value = data.clients;
                 } else {
                   playerCount.value = 0;
                 }
                 
                 maxPlayers.value = data.sv_maxclients || 32;
                 return;
               }
             }
           } catch (e) {
             // dynamic.json failed, try next method
           }

    // Method 4: Try alternative proxy with info.json
    try {
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(`http://${props.serverIp}:${props.serverPort}/info.json`)}`;
      const response = await fetch(proxyUrl, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const data = await response.json();
        
               if (data && data.vars) {
                 isOnline.value = true;
                 
                 // Parse player count - RedM structure can vary
                 if (Array.isArray(data.players)) {
                   playerCount.value = data.players.length;
                 } else if (typeof data.players === 'number') {
                   playerCount.value = data.players;
                 } else {
                   playerCount.value = 0;
                 }
                 
                 maxPlayers.value = data.vars.sv_maxClients || data.vars.sv_maxclients || 32;
                 return;
               }
             }
           } catch (e) {
             // corsproxy info.json failed
           }

           // If all methods fail, mark as offline
           isOnline.value = false;
           playerCount.value = null;
           maxPlayers.value = null;
    
         } catch (error) {
           // Failed to fetch server status
           isOnline.value = false;
           playerCount.value = null;
           maxPlayers.value = null;
         } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  checkServerStatus();
  
  // Set up periodic checks
  intervalId = setInterval(() => {
    checkServerStatus();
  }, props.checkInterval);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<script lang="ts">
import { computed } from 'vue';
</script>

<style scoped>
.server-status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background: var(--vp-c-bg-soft);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  border: 1px solid var(--vp-c-divider);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--font-medium);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

.status-online .status-dot {
  background-color: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
}

.status-offline .status-dot {
  background-color: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
  animation: none;
}

.status-loading .status-dot {
  background-color: #3b82f6;
  animation: pulse 1s ease-in-out infinite;
}

.status-unknown .status-dot {
  background-color: #6b7280;
  animation: none;
}

.status-online .status-text {
  color: #10b981;
}

.status-offline .status-text {
  color: #ef4444;
}

.status-loading .status-text {
  color: #3b82f6;
}

.status-unknown .status-text {
  color: #6b7280;
}

.player-count {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--vp-c-text-2);
  padding-left: var(--space-3);
  border-left: 1px solid var(--vp-c-divider);
}

.player-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .server-status {
    flex-wrap: wrap;
    font-size: var(--text-xs);
  }

  .player-count {
    padding-left: 0;
    border-left: none;
    width: 100%;
    margin-top: var(--space-2);
    padding-top: var(--space-2);
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>

