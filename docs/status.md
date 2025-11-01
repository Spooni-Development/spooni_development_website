---
layout: page
title: Server Status
sidebar: false
description: Live status of all SPOONI servers and services
head:
  - - meta
    - name: keywords
      content: SPOONI server status, RedM server status, FiveM status, Discord status, CFX services status, server monitoring, live server status, game server status
---

<script setup>
import { ref, onMounted } from 'vue'
import ServerStatus from './.vitepress/theme/components/ServerStatus.vue'

// External service statuses with components
const cfxStatus = ref({ 
  status: 'operational', 
  message: 'All Systems Operational',
  components: [],
  incidents: []
})
const discordStatus = ref({ 
  status: 'operational', 
  message: 'All Systems Operational',
  components: [],
  incidents: []
})
const isLoadingExternal = ref(true)

async function checkExternalServices() {
  try {
    // Check CFX Status (FiveM/RedM) with components
    const cfxResponse = await fetch('https://status.cfx.re/api/v2/summary.json')
    if (cfxResponse.ok) {
      const cfxData = await cfxResponse.json()
      cfxStatus.value = {
        status: cfxData.status.indicator || 'operational',
        message: cfxData.status.description || 'All Systems Operational',
        components: cfxData.components || [],
        incidents: cfxData.incidents || []
      }
    }
  } catch (error) {
    console.warn('Failed to fetch CFX status:', error)
    cfxStatus.value = { 
      status: 'unknown', 
      message: 'Status Unknown',
      components: [],
      incidents: []
    }
  }

  try {
    // Check Discord Status with components
    const discordResponse = await fetch('https://discordstatus.com/api/v2/summary.json')
    if (discordResponse.ok) {
      const discordData = await discordResponse.json()
      discordStatus.value = {
        status: discordData.status.indicator || 'operational',
        message: discordData.status.description || 'All Systems Operational',
        components: discordData.components || [],
        incidents: discordData.incidents || []
      }
    }
  } catch (error) {
    console.warn('Failed to fetch Discord status:', error)
    discordStatus.value = { 
      status: 'unknown', 
      message: 'Status Unknown',
      components: [],
      incidents: []
    }
  }

  isLoadingExternal.value = false
}

onMounted(() => {
  checkExternalServices()
  // Refresh every 5 minutes
  setInterval(checkExternalServices, 300000)
})

function getStatusClass(status) {
  if (status === 'operational' || status === 'none') return 'status-operational'
  if (status === 'degraded_performance' || status === 'partial_outage') return 'status-degraded'
  if (status === 'major_outage') return 'status-outage'
  return 'status-unknown'
}

function getStatusIcon(status) {
  if (status === 'operational' || status === 'none') return '✓'
  if (status === 'degraded_performance' || status === 'partial_outage') return '⚠'
  if (status === 'major_outage') return '✕'
  return '?'
}
</script>

<style scoped>
/* Container */
.status-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

/* Header */
.status-page-header {
  text-align: center;
  margin-bottom: 64px;
  padding-bottom: 0;
}

.status-page-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.status-page-subtitle {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin: 0;
  font-weight: 400;
}

/* Section */
.status-section {
  margin-bottom: 56px;
}

.status-section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 32px 0;
  padding-bottom: 0;
  letter-spacing: -0.02em;
}

/* Grid Layout */
.status-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* Status Cards */
.status-card {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.status-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.status-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.status-card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  flex: 1;
  min-width: 150px;
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  text-transform: capitalize;
}

.status-operational {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border: none;
}

.status-degraded {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border: none;
}

.status-outage {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: none;
}

.status-unknown {
  background: rgba(107, 114, 128, 0.15);
  color: #6b7280;
  border: none;
}

/* Card Body */
.status-card-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

/* Server Status Wrapper */
.server-status-wrapper {
  display: flex;
  justify-content: stretch;
  align-items: center;
}

.server-status-wrapper :deep(.server-status) {
  width: 100%;
  justify-content: space-between;
  padding: 12px 16px;
}

.server-status-wrapper :deep(.status-dot) {
  width: 10px;
  height: 10px;
}

/* External Service Message */
.external-service-message {
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* Status Link */
.status-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top: auto;
}

.status-link:hover {
  color: var(--vp-c-brand-2);
  gap: 8px;
}

/* Service Components */
.service-components {
  margin-top: 20px;
  padding-top: 0;
}

.service-components-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.component-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.component-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--vp-c-bg);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}

.component-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transform: translateX(2px);
}

.component-name {
  color: var(--vp-c-text-1);
  flex: 1;
}

.component-status {
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 10px;
  font-weight: 500;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
}

.component-status.operational {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border: none;
}


.component-status.degraded {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border: none;
}

.component-status.outage {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: none;
}

/* Incidents */
.service-incidents {
  margin-top: 20px;
  padding-top: 0;
}

.incident-item {
  padding: 14px;
  background: rgba(245, 158, 11, 0.1);
  border: none;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 1px 4px rgba(245, 158, 11, 0.15);
}

.incident-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
  font-size: 14px;
}

.incident-status {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Last Updated */
.last-updated {
  text-align: center;
  margin-top: 64px;
  padding-top: 0;
}

.last-updated p {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 960px) {
  .status-container {
    padding: 24px 20px;
  }

  .status-page-title {
    font-size: 40px;
  }

  .status-page-subtitle {
    font-size: 18px;
  }

  .status-section-title {
    font-size: 24px;
  }

  .status-grid {
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .status-container {
    padding: 20px 16px;
  }

  .status-page-header {
    margin-bottom: 48px;
    padding-bottom: 24px;
  }

  .status-page-title {
    font-size: 32px;
  }

  .status-page-subtitle {
    font-size: 16px;
  }

  .status-section {
    margin-bottom: 40px;
  }

  .status-section-title {
    font-size: 22px;
    margin-bottom: 24px;
  }

  .status-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .status-card {
    padding: 20px;
  }

  .status-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .status-card-title {
    font-size: 18px;
  }

  .status-badge {
    font-size: 13px;
    padding: 5px 12px;
  }

  .last-updated {
    margin-top: 48px;
    padding-top: 24px;
  }

  .last-updated p {
    font-size: 13px;
  }

  .component-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .component-status {
    align-self: flex-end;
  }
}
</style>

<div class="status-container">
<div class="status-page-header">
<h1 class="status-page-title">System Status</h1>
<p class="status-page-subtitle">Live status of all SPOONI servers and services</p>
</div>

<div class="status-section">
<h2 class="status-section-title">Our Servers</h2>
<div class="status-grid">
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">Showcase</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="51.77.90.75" :serverPort="30120" serverType="redm" />
</div>
</div>
</div>
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">Development</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="176.96.137.178" :serverPort="30120" serverType="redm" />
</div>
</div>
</div>
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">Mapping</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="176.96.137.178" :serverPort="30130" serverType="redm" />
</div>
</div>
</div>
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">Mapping 2</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="176.96.137.178" :serverPort="30140" serverType="redm" />
</div>
</div>
</div>
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">RSG</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="176.96.137.178" :serverPort="30150" serverType="redm" />
</div>
</div>
</div>
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">FiveM</h3>
</div>
<div class="status-card-body">
<div class="server-status-wrapper">
<ServerStatus serverIp="176.96.137.178" :serverPort="30160" serverType="fivem" />
</div>
</div>
</div>
</div>
</div>

<div class="status-section">
<h2 class="status-section-title">External Services</h2>
<div class="status-grid">
<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">CFX Services</h3>
<div v-if="!isLoadingExternal" class="status-badge" :class="getStatusClass(cfxStatus.status)">
<span>{{ cfxStatus.status === 'operational' || cfxStatus.status === 'none' ? 'Operational' : cfxStatus.status.replace('_', ' ') }}</span>
</div>
<div v-else class="status-badge status-unknown">
<span>Checking</span>
</div>
</div>
<div class="status-card-body">
<p class="external-service-message">{{ cfxStatus.message }}</p>
<div v-if="cfxStatus.incidents && cfxStatus.incidents.length > 0" class="service-incidents">
<h4 class="service-components-title">Active Incidents</h4>
<div v-for="incident in cfxStatus.incidents.slice(0, 3)" :key="incident.id" class="incident-item">
<p class="incident-name">{{ incident.name }}</p>
<p class="incident-status">{{ incident.status.replace('_', ' ') }}</p>
</div>
</div>
<div v-if="cfxStatus.components && cfxStatus.components.length > 0" class="service-components">
<h4 class="service-components-title">Service Components</h4>
<div class="component-list">
<div v-for="component in cfxStatus.components.slice(0, 6)" :key="component.id" class="component-item">
<span class="component-name">{{ component.name }}</span>
<span class="component-status" :class="getStatusClass(component.status)">
{{ component.status === 'operational' ? 'Operational' : component.status.replace('_', ' ') }}
</span>
</div>
</div>
</div>
<a href="https://status.cfx.re/" target="_blank" class="status-link">View Full Status →</a>
</div>
</div>

<div class="status-card">
<div class="status-card-header">
<h3 class="status-card-title">Discord</h3>
<div v-if="!isLoadingExternal" class="status-badge" :class="getStatusClass(discordStatus.status)">
<span>{{ discordStatus.status === 'operational' || discordStatus.status === 'none' ? 'Operational' : discordStatus.status.replace('_', ' ') }}</span>
</div>
<div v-else class="status-badge status-unknown">
<span>Checking</span>
</div>
</div>
<div class="status-card-body">
<p class="external-service-message">{{ discordStatus.message }}</p>
<div v-if="discordStatus.incidents && discordStatus.incidents.length > 0" class="service-incidents">
<h4 class="service-components-title">Active Incidents</h4>
<div v-for="incident in discordStatus.incidents.slice(0, 3)" :key="incident.id" class="incident-item">
<p class="incident-name">{{ incident.name }}</p>
<p class="incident-status">{{ incident.status.replace('_', ' ') }}</p>
</div>
</div>
<div v-if="discordStatus.components && discordStatus.components.length > 0" class="service-components">
<h4 class="service-components-title">Service Components</h4>
<div class="component-list">
<div v-for="component in discordStatus.components.slice(0, 6)" :key="component.id" class="component-item">
<span class="component-name">{{ component.name }}</span>
<span class="component-status" :class="getStatusClass(component.status)">
{{ component.status === 'operational' ? 'Operational' : component.status.replace('_', ' ') }}
</span>
</div>
</div>
</div>
<a href="https://discordstatus.com/" target="_blank" class="status-link">View Full Status →</a>
</div>
</div>
</div>
</div>

<div class="last-updated">
<p>Status checks update automatically every 60 seconds for servers and 5 minutes for external services.</p>
</div>
</div>