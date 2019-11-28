# Rocket
Rocket is 2d game created during education
![GitHub Logo](/images/forReadme/start.PNG)

## Description
Use arrow keys to control the spaceship and space button to fire, you can find additional information about bullets amount in console.
All items and bots are draggable before the game started.
![GitHub Logo](/images/forReadme/draggableItems.PNG)

if spaceship collided with bot, you will be returned to the start point and one life will be lost, the bot will receive damage as well. 
If you lost all lives the game is over.  But don't worry, if you wish to try one more time just refresh the page.
![GitHub Logo](/images/forReadme/hp.png)

You can collect lives and ammo using appropriate items. If you collected more than three lives, it will be shown as 3+ live on the screen, but you will still get a new life. Use the ammo wisely to clear the way from bots, before all bullets are gone, but anyway you can still take bots to ram to clear the way :)
![GitHub Logo](/images/forReadme/bullet.PNG)
When all bots destroyed, you won.

## Architecture
Architecture based on observable pattern, in my opinion, is a good solution for such game. 
It gives flexibility in communicating with objects, using different event and callback functions.

Thanks for reading :)   
