INA DIMAPILIS PORTFOLIO
=======================

Files:
- index.html       Home page
- about.html       About page
- portfolio.html   Portfolio gallery and local media preview
- contact.html     Contact details and email form
- css/style.css    All website styling
- javascript/script.js  Theme, navigation, animations, filters, preview and contact form
- images/          Put image assets here
- videos/          Put video assets here

HOW TO VIEW
1. Extract this folder.
2. Open index.html in a browser. For a more reliable local development experience,
   open the folder in Visual Studio Code and use the Live Server extension.
3. Keep the css and javascript folders beside the HTML files.

ADDING PORTFOLIO WORK
The portfolio page currently includes sample placeholder cards. To publish your own work,
edit portfolio.html and replace the placeholder cards with <img> or <video> elements.
Put your image files in images/ and video files in videos/, then use relative paths such as:
  images/my-project.jpg
  videos/my-edit.mp4

The Choose images/videos control is only a browser preview. It does not upload files
to a server and visitors will not see files selected on your computer. To let you upload
media from a live website and store it online, a backend and file storage service are needed.

CONTACT FORM
The contact form opens the visitor's default email app with a prefilled message addressed
to inarazondimapilis@gmail.com. It does not send automatically.

THEME
The sun/moon button switches between light and dark themes and remembers the choice
in that browser.
