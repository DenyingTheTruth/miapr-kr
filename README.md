# miapr-kr

### Workaround

1. Need to install Node.JS v14+

2. Need to install Tesseract OCR

    tesseract: stable 4.1.3 (bottled), HEAD
    OCR (Optical Character Recognition) engine

    https://github.com/tesseract-ocr/

    From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/tesseract.rb

3. Need to install Tesseract OCR Lang packages

    tesseract-lang: stable 4.1.0 (bottled)

    Enables extra languages support for Tesseract

    https://github.com/tesseract-ocr/tessdata_fast/


    From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/tesseract-lang.rb

### Run local

1. Install npm modules by ```npm install``` in root folder
2. Start project throw ```npm start``` in root folder

### About 

1. Endpoint ```/recognizer/uploads``` work with image file
2. Endpoint ```/recognizer/links``` work with array of image links
    
    Example:
    
    ```
    {
      "links": [
          "https://248006.selcdn.ru/main/upload/setka_images/13075919012021_0183a8eb3d28a61335d1b32362fefa6eacfb6c89.jpg",
          "https://i.ytimg.com/vi/qvbI3V8fITA/maxresdefault.jpg",
          "https://i02.fotocdn.net/s116/202564a688f36b08/public_pin_m/2635884313.jpg",
          "https://media.kasperskydaily.com/wp-content/uploads/sites/90/2020/04/09183211/how-to-leak-image-info-screen-7-ru.png"
      ]
    }
    ```

3. URL params: 
    1. lang - ```rus``` or ```en```
    2. psm - use 11 or try some other https://github.com/tesseract-ocr/tesseract/blob/8d6dbb133b41/api/tesseractmain.cpp#L115
    3. dpi - use 72 or 96, 300 for high resolution images, 10dpi for super small resolution images

### Testing

Use Postman or other analogs for testing OCR API.

Examples:
![image](https://user-images.githubusercontent.com/43136703/147881684-95e550e1-0cf2-4622-9512-128c61a39647.png)
![image](https://user-images.githubusercontent.com/43136703/147881692-7f5b8778-ece2-4de2-b9e2-86d75f988911.png)
