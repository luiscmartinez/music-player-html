const filenames = [
  "bad_girl",
  "burn",
  "confessions",
  "do_it_to_me",
  "dont_waste_my_time",
  "glu",
  "good_kisser",
  "good_love",
  "i_dont_mind",
  "lemme_see",
  "u_dont_have_to_call",
  "u_make_me_wanna",
  "can_u_handle_it",
  "u_got_it_bad"
];

// JavaScript to create a new HTML page based on an array of strings
const fs = require("fs");

function parseSongName(name) {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

filenames.forEach((filename) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../index.css" rel="stylesheet">
        <title>Usher Presents: My Way</title>
    </head>
    <body>
        <div class="music-card">
            <figure class=".center-flexbox">
                <div class="music-thumbnail-container">
                <img src="/media/hero.png" class="hero">
                </div>
                <div class="center-flexbox">
                  <figcaption class="song-title">Listen to: ${parseSongName(
                    filename
                  )}</figcaption>
                 <audio controls src="/media/usher-${filename}.mp3" autoplay>
                    <a href="/media/${filename}.mp3"> Download audio </a>
                </audio>
            </div>
        </figure>
        </div>
    </body>
    </html>
    `;

  fs.writeFile(`${filename}.html`, htmlContent, (err) => {
    if (err) throw err;
    console.log(`File ${filename}.html has been created!`);
  });
});
