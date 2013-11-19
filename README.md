My Music Application:

"A mosaic of music that accesses and embeds links from Soundcloud, Youtube and 8 Tracks within the application"

Created by Ben Irving, Dylan Runkel, Rob Moore, Chris Chaulk and Connor Shocrylas 

sudo npm install -g cordova

- clone this repository
- navigate to the directory that contains platforms, plugins and www.
- make sure the hidden .cordova file exists so cordova knows where to start.
- execute the following command to run on your device (use your IP, and your phone's password)
- ./platforms/blackberry10/cordova/target add dev_phone 192.168.1.100 --password password
- make sure that development mode is enabled on your phone

cordova -d build && cordova -d run  

known bugs
----------
seems like every song returned from 8 tracks starts playing when you touch the widget. same with soundcloud. not too sure if this is related to the device or the way we have structured our application. also, 8 tracks returns way too many results we need to limit to 5. 
