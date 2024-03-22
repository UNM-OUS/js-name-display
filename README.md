# Name scanner display

This is a simple in-browser app for taking input names and outputting them to a scrolling list. Whatever computer runs it will need to be connected to the AV folks' system so that they can screen capture it and integrate it into the live video feed.

It is designed to be used with wireless QR code scanners, specifically they must be ones that support pairing multiple scanners with a single receiver. Currently the only ones we know of that do that while still being an HID device are Nadamoo brand. Specifically we have [these](https://www.amazon.com/NADAMOO-Wireless-Barcode-Cordless-Computer/dp/B06Y2RMM51/ref=sr_1_3?crid=N02CEFMAEYEA&dib=eyJ2IjoiMSJ9.wKdGYv5Y9qxSPcXnownqPeqbs8vkKtVhr1vEfDMKdUGpCIhsjisSQH9EBIqjd_ZOG8WHovBGtF-JV0Vd6ohJukXLJlIRdr8w-m4DDdvlncIseghXkarHWIcn9Sn29U0JsOv72lfjOp9gP8CdiVim3pUDHeX3yFD0yfN-TWPEUuGXVvp4JXqD-KX0VXImGdiLMH0v2Iij9AMFjJ1qtaOVUKZD1ulnfhliPYuQZLDqOf8.YpmfNCw2dqxiwOCIU1pBM7-juxKleZsWA6vO2a503mE&dib_tag=se&keywords=nadamoo+scanner+long+range&qid=1711038690&sprefix=nadamoo+scanner+long+rang%2Caps%2C162&sr=8-3).

## Computer setup

The computer this runs on should have the following settings adjusted. Ideally this computer should also not be domain-joined, and have nothing on it but this app. Ideally it could even be run in kiosk mode.

* Prevent sleeping: ensure that it will not automatically turn off the screen or go to sleep
* Set scaling to 100%: the scaling should be set to 100% so that at 1080p the browser renders 1:1 pixels
* Open index.html in any old browser and ensure display is fullscreen
  * Tip: In Kiosk mode you can force 100% scaling in kiosk mode by prepending the Edge URL field with `/Force-Device-Factor=1.00`, i.e. `/Force-Device-Factor=1.00 file:///C:/js-name-display/index.html`

## Using the system

Plug in the receiver (which should be paired with all scanners, per manufacturer instructions). Make sure the cursor is in the input field of the browser window (it will hassle you if you don't).

Try every scanner with some test cards to verify that they all work. It should be pretty self-explanatory from there.