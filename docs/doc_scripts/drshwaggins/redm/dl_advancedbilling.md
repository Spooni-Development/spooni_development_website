---
prev: false
next: false
aside: false
---

# 💵 dl_advancedbilling
Documentation relating to the [dl_advancedbilling](https://drshwaggins-scripts.tebex.io/package/5676792).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/MZkblpaxLME?si=NM_dwxeY-ej6gDz9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
dl_advancedbilling works only with VORP. 

To install dl_advancedbilling:
- Drag and drop the resource into your resources folder
  - `dl_advancedbilling`
- Add this ensure in your server.cfg
  - `ensure dl_advancedbilling`
- Execute the SQL file
  - `mybills.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [DrShwaggins Discord](https://discord.gg/K9H27J5VaS).

## 2. Usage
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

## 3. For developers

:::details Config.lua
```lua
Translation = {}
Config = {}
Config.Locale = 'en'

Config.SharedJobBills = {'testjob','testjob2'}
Config.AutoAcceptBills = {''}

Config.CheckJobBills = {''} -- Jobs who can use /checkbills [jobname] command to check open job bills for x job

Config.SocietySystem = "dl_society" -- Options: dl_society, mega_companies, syn_society

Config.PlayerDistance = 3.0 -- If you dont use NPlayerSelector

Config.UseCommand = true -- Enables/Disables Command
Config.MenuCommand = "mybills"
Config.EnableEventOpening = true -- Allow to open Menu from export event (use it in inventory for example to open menu if item is activated)

Config.UseNPlayerSelector = true -- You NEED TO INSTALL MEGA_NPLAYERSELECTOR TO USE THIS | Otherwise using nearest player by PlayerDistance

Config.UseUI = true
Config.UseAnims = true

Config.AcceptBillType = 0 -- 0 = Sign to Accept; 1 = Button to Accept

Config.UseLogger = false  -- Turn on if Logging
Config.Webhook = ""
Config.webhookAvatar = ""
Config.WebhookName = "DL-Advancedbilling"


Translation = {

    ['de'] = {

        ['mainmenutitle'] = 'Rechnungen',
        ['mainmenusubtext'] = 'Rechnungen erstellen und eigene ansehen',

        ['bills'] = 'Meine Rechnungen',
        ['bills_desc'] = 'Sieh dir deine zu zahlenden Rechnungen an',
        ['give_bill'] = 'Rechnung ausstellen',
        ['give_bill_desc'] = 'Stelle eine Rechnung aus',
        ['bills_open'] = 'Private ausgestellte Rechnungen',
        ['bills_open_desc'] = 'Sehe von dir ausgestellte Rechnungen an',
        ['bills_job_open'] = 'Firmen Rechnungen',
        ['bills_job_open_desc'] = 'Sehe von deiner Firma ausgestellte offene Rechnungen an',

        ['pay_bill_label'] = 'Rechnung von:',
        ['pay_bill'] = 'Bezahle die Rechnung',

        ['open_bill_label'] = 'Rechnung an:',
        ['open_bills_title'] = 'Offene Rechnungen',
        ['open_job_bills_title'] = 'Offene Firmen Rechnungen',

        ['payed_bill_message'] = 'Du hast eine Rechnung bezahlt',
        ['your_bill_got_payed'] = 'Eine von dir ausgestellte Rechnung wurde bezahlt',
        ['not_enough_money'] = 'Du hast nicht genügend Geld!',

        ['create_bill'] = "Rechnung erstellen",

        ['create_bill_own'] = 'Private Rechnung erstellen',
        ['create_bill_job'] = 'Firmen Rechnung erstellen',


        ['create_bill_reason'] = 'Grund',
        ['create_bill_reason_button'] = 'Grund eintragen',
        ['create_bill_amount'] = 'Betrag',
        ['create_bill_amount_button'] = 'Betrag eintragen',



        ['invalid'] = "Ungültiger betrag",
        ['invalid_data'] = "Bitte trage einen Grund und den Betrag ein!",
        ['invalid_distance'] = "Keine Spieler in der nähe",
        ['invalid_length'] = "Der Grund ist zu lang. Bitte kürzen.",


        ['accept_billing_menu'] = "Rechnung akzeptieren?",

        ['dialog_accept'] = 'Rechnung annehmen',
        ['dialog_reject'] = 'Rechnung ablehnen',

        ['bill_rejected'] = 'Deine Rechnung wurde abgelehnt',

        ['target_bill_accepted'] = 'Du hast die Rechnung akzeptiert.',
        ['target_bill_rejected'] = 'Du hast die Rechnung abgelehnt.',

        ['bill_accepted'] = 'Deine Rechnung wurde akzeptiert.',

    },


    ['en'] = {

        ['mainmenutitle'] = 'Bills',
        ['mainmenusubtext'] = 'Create a Bill and show my Bills',

        ['bills'] = 'My Bills',
        ['bills_desc'] = 'Look at the bills you have to pay',
        ['give_bill'] = 'Hand over invoice',
        ['give_bill_desc'] = 'Give invoice',
        ['bills_open'] = 'Private issued invoices',
        ['bills_open_desc'] = 'View invoices you have issued',
        ['bills_job_open'] = 'Company invoices',
        ['bills_job_open_desc'] = 'View outstanding invoices issued by your company',

        ['pay_bill_label'] = 'Bill from:',
        ['pay_bill'] = 'Pay the bill',

        ['open_bill_label'] = 'Bill to:',
        ['open_bills_title'] = 'Open invoices',
        ['open_job_bills_title'] = 'Open company invoices',

        ['payed_bill_message'] = 'You paid a bill',
        ['your_bill_got_payed'] = 'An invoice you issued has been paid',
        ['not_enough_money'] = 'You dont have enough money!',

        ['create_bill'] = "Create a Bill",

        ['create_bill_own'] = 'Create private invoice',
        ['create_bill_job'] = 'Create company invoice',

        ['create_bill_reason'] = 'Reason',
        ['create_bill_reason_button'] = 'Enter reason',
        ['create_bill_amount'] = 'Amount',
        ['create_bill_amount_button'] = 'Enter Amount',

        ['invalid'] = "Invalid amount",
        ['invalid_data'] = "Please enter a reason and the amount!",
        ['invalid_distance'] = "No players around",
        ['invalid_length'] = "The reason is too long. Please shorten.",

        ['accept_billing_menu'] = "Accept invoice?",

        ['dialog_accept'] = 'Accept bill',
        ['dialog_reject'] = 'Reject invoice',

        ['bill_rejected'] = 'Your invoice has been declined',

        ['target_bill_accepted'] = 'You accepted the bill.',
        ['target_bill_rejected'] = 'You declined the bill.',

        ['bill_accepted'] = 'Your invoice has been accepted.',

    }


  }
:::
