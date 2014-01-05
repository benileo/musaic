My Music Application:

"A mosaic of music that accesses and embeds links from Soundcloud, Youtube and 8 Tracks within the application"

Created by Ben Irving, Dylan Runkel, Rob Moore, Chris Chaulk and Connor Shocrylas 

sudo npm install -g cordova

** This application is formatted for BB10 but can be run on android as well. However, 
the application does not look as good because there are some "device specific features"
that are different across the two platforms. 

- However, if you can't run on BB10 it won't look nearly as good because one particular member of the group
who put the most work into the application was keen to run it on his BB10.

- clone this repository
- index1.html is the HTML file (you can test the application in the browser)
- navigate to the directory that contains platforms, plugins and www.
- make sure the hidden .cordova file exists so cordova knows where to start.
- make sure you have the bb sdk installed in your path
- execute the following command to run on your device (use your IP, and your phone's password)
- ./platforms/blackberry10/cordova/target add dev_phone 192.168.1.100 --password password
- make sure that development mode is enabled on your phone

cordova -d build && cordova -d run  

To run on Android
- cordova platform add android
- cordova build && cordova run 

KNOWN BUGS 
-web security is disabled.
