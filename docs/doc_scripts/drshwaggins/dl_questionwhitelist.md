# ⚔️ dl_questionwhitelist
Documentation relating to the dl_questionwhitelist.

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/6gm3W5wBjng?si=kpFTrMTGXW03j1-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
== BUY
[Buy the script](https://drshwaggins-scripts.tebex.io/package/5915178)
:::

## 1. Installation
dl_questionwhitelist works Standalone. 

#### To install dl_questionwhitelist:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `dl_questionwhitelist`
- Add this ensure in your server.cfg
  ```
    ensure dl_questionwhitelist
  ```
- Execute the SQL file
  - `sql.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [DrShwaggins Discord](https://discord.gg/K9H27J5VaS).

## 2. Usage
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.AskOnJoin = true -- Otherwise use the export event to ask for whitelist status (Readme)
Config.DevMode = false

Config.AskedQuestions = 3
Config.MaxErrorCount = 2  -- if set to 2 the player will be banned/kicked if he makes his 3rd mistake
Config.QuestionTimer = 5 -- in minutes

Config.BanPlayerIfFailed = true
Config.BanTime = 1 -- in hours
Config.BanReason = "Whitelist failed!"

Config.Language = {
  ['nextQuestion'] = "Next Question",
  ['endQuiz'] = "End Quiz"
}


Config.UseDiscordRoles = false  -- If true, it checks the users discord roles instead of the status in the database !
Config.DiscordToken = "" -- Your Discord Bot Token from Creation
Config.DiscordGuildID = ""  -- Your Discord Server ID / GuildID
Config.DiscordCheckRoles = {1153629959277133578} -- Role ID´s that are checked (if the player has the roles, he already has the whitelist if not he has to do the questions)
Config.DiscordAddRoles = {1153659959347113578,1155484234816624081}  -- Roles that will be added if the player passes the questions
Config.DiscordRemoveRoles = {1153670924580511805} -- Roles that will be removed if the player passes the questions


Config.UseLogger = false  -- Turn on if Logging
Config.Webhook = ""
Config.webhookAvatar = ""
Config.WebhookName = "DL-Questionwhitelist"

Config.QuestionList = {

  {
    id = 0,
    question = "How many Sherffis have to be online to Rob people ?",
    possibleanswers = {
      {
        answerID = 1,
        answer = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
      },
      {
        answerID = 2,
        answer = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      },
      {
        answerID = 3,
        answer = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"
      }
    },
    rightanswer = 2 -- AnswerID of the right answer here
  },


  {
    id = 1,
    question = "What is the right way to deal with Fail RP",
    possibleanswers = {
      {
        answerID = 1,
        answer = "Immediately stop playing and go to Support"
      },
      {
        answerID = 2,
        answer = "Continue to Play the Situation and open a Support Ticket after"
      },
      {
        answerID = 3,
        answer = "Tell the player that hes currently doing Fail RP"
      },
      {
        answerID = 4,
        answer = "Your allowed to kill the player to end the FailRP"
      }
    },
    rightanswer = 2
  },

  {
    id = 2,
    question = "What is RDM?",
    possibleanswers = {
      {
        answerID = 1,
        answer = "Killing a Person Randomly with Weapons or Fists without RP Background"
      },
      {
        answerID = 2,
        answer = "Killing a Person Randomly with a Vehicle without RP Background"
      },
    },
    rightanswer = 1
  },

}
:::
