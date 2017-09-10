# <a id="top"></a> My Portfolio Website Project
## www.glenndimaliwat.com      
A portfolio website is a project that will not only help me get a job, but it will also represent my brand and all the digital services I provide as a Software Developer and Designer. What I have in mind is a portfolio that can be updated over time. For me, it is a project that is never finished and more content will be added as I get more experience and projects.      

For my design, I decided to go with a cool and calm colour scheme which are multiple blue colours with a hint of grey and brown. These colours seem very flexible as they can be transformed from urban, corporate or hipster. The theme that I, however, is a modern hipster design which matches my logo and my profile photo. I want to represent my brand as someone who is familiar with the current style of the web and familiar with the popular culture. I believe that this extends my target demographic globally and it represents my identity.     


# Contents
- **[Trello board](#TrelloBoard)**
- **[Mood board](#MoodBoard)**
- **[Minimum Viable Product](#MVP)**
- **[Inspiration](#Inspiration)**
- **[Style Guide and Wireframes](#Wireframes)**
- **[Challenges](#Challenges)**
- **[Coding](#Coding)**
- **[Tools](#Tools)**
- **[Optimisation](#Optimisation)**
- **[Manual Testing](#Testing)**
- **[Final Product](#Final)**


# <a id="TrelloBoard"></a>Trello Board
I am using agile methodologies in building my project which is why I opened a public Trello board. This kept me organized all throughout the project and minimize the stress in remembering all the details and putting them into action.               
![](http://www.glenndimaliwat.com/assets/screenshots/trello-board.png)        

The trello board can be found at this [link](https://trello.com/b/pEZaMjod)     

[Back to Top](#top)

# <a id="MoodBoard"></a>Mood Board
My Pinterest mood board is composed of photos from keywords "Winter", "Wolf", "Hipster", "Vikings" and "Beards". Mostly, what I got on this board are the Runic Typography and symbols for my logo and the Hazy Nature background idea for my hero image.       

My pinterest mood board can be found at this [link](https://au.pinterest.com/glenndimaliwat/portfolio-moodboard/)               
My Spotify playlist set most of the mood on my website. I believe it has created a very calm ambience and a good balance between content and theme. I appreciated this mood board more than the Pinterest because the music also kept me productive as I was designing my mockup in Figma.      

The spotify playlist can be found at this [link](https://goo.gl/qkK2sU)     

[Back to Top](#top)

# <a id="MVP"></a>Minimum Viable Product
My MVP was created before I had any good content. It basically copied the short bio from my resume and used font awesome links for social media.

![](http://www.glenndimaliwat.com/assets/screenshots/mvp.png)          
The mvp is still up and running at this [link](http://www.glenndimaliwat.com/mvp.html)      

[Back to Top](#top)

# <a id="Inspiration"></a>Inspiration

## Tagline
My tagline "Aim for the moon. Move fast, fail better and break stuff" is inspired by these popular quotes. For me, a tagline creates a first impression once someone visits your website.        

*“Shoot for the moon. Even if you miss, you'll land among the stars.”* ― Norman Vincent Peale     
![](http://www.glenndimaliwat.com/assets/screenshots/aimmoon.jpg)       

*"Move fast and break things"* — Mark Zuckerberg      
![](http://www.glenndimaliwat.com/assets/screenshots/zuckerberg.jpg)        

*"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."* — Samuel Beckett      
Other popular *fail fast* slogan - [link](https://www.startupinstitute.com/blog/2015-5-6-inspirational-quotes-about-failure)      

## Denise Chandler
Among all the websites that I visited, Denise's website really got my attention and it became my sole inspiration. Her choice of colour scheme is quite unique and it works really well with her theme. Like my design, she also incorporated a tagline "Stand Out" and a character in her theme which is a "sea monster". I believe this really represented her objective to stand out and it did as her website is among the top 15 developer portfolio website.            
![](http://www.glenndimaliwat.com/assets/screenshots/denisechandler.png)        

## Typography
My typography was inspired by typography from hipster clothing, barber shops, handcrafted liquor, song lyrics or simply a funny discussion that I had with my colleagues which turned into an idea. The letters in my logo were inspired by the thinness of Viking runic symbols which worked well with the other symbols in my logo.      

![](http://www.glenndimaliwat.com/assets/screenshots/typography.png)        

[Back to Top](#top)


# <a id="Wireframes"></a>Style Guide and Wireframes
For my mockup design, I used Figma while my colour scheme is extracted from [colormind.io](colormind.io). Designing my website from Figma was a wonderful experience as I could visually predict the outcome of my website without having to code anything with some exceptions like animations or optimising responsive breakpoints.   

The full figma project can be viewed at the following [link](https://www.figma.com/file/VNYTgiznPFjlymYOYqoL6rDv/Portfolio)     

![](http://www.glenndimaliwat.com/assets/screenshots/figma.png)      

[Back to Top](#top)


# <a id="Challenges"></a>Challenges
The challenge for me initially was that I did not understand what a mood board does or how it serves a purpose in selecting my theme, colour scheme and typography. I eventually overcame this when it became clear to me that music is also part of creating the mood board.       

Optimising my website with Google PageSpeed Insights was also quite a challenge especially for mobile. I was eventually able to get better scores by following the optimisation guidelines recommended by Google.       

[Back to Top](#top)


# <a id="Coding"></a>Coding
I coded small parts of my website as I went through my design because I needed to know my options in terms of CSS possibilities and my limited knowledge to implement them on time. This resulted in me having multiple versions of my designs. Each version is a milestone of certain decisions such as "Should I use flexbox to list down my skills?", "Should I create a separate section for my Instagram photos?", or "What would happen to this photo if I hit a certain screen size breakpoint?".       

This strategy worked for me as every time I am in doubt, I would just create a new version of my design in Figma.       
When my design and theme was already established, I would find myself in situations where I prefer to update my Figma after I updated my CSS. This maybe a bad habit but I am hoping to overcome this with more practice.       
            
The most fun I had when coding this website was when I was using Mixins and using iteration logic to colour my elements. At one point, I had to code the logic first in ruby before translating them to the actual SCSS.

In Ruby:
```
# modulo_colors.rb
# Find the pattern for
# 1, 5, 9   -Ash Blue
# 2, 6, 10  -True Blue
# 3, 7, 11  -Deep Blue
# 4, 8, 12  -Brown

$i = 1
$count = 12
while $i <= $count
    if $i % 4 == 1
        puts "#{$i} is for every 1st and is therefore Ash Blue" 
    elsif $i % 4 == 2
        puts "#{$i} is for every 2nd and is therefore True Blue" 
    elsif $i % 4 == 3
        puts "#{$i} is for every 3rd and is therefore Deep Blue" 
    elsif $i % 4 == 0
        puts "#{$i} is for every 4th and is therefore Brown"
    end
    $i += 1
end
```

In SCSS:
```
/*
*   Mixin for Box Color and Font Color
*/
@mixin box_theme($className) {
    /* Determine Class Count */
    $class_count: 0;
    @if $className == 'tech' {
        $class_count: $tech_count;
    }
    @else if $className == 'social' {
        $class_count: $social_count;
    }

    /* Loop through Classes */
    @for $i from 1 through $class_count {
        @if $i % 4 == 1 {
            .#{$className}#{$i} {
                @include box_color($ashblue);
            }
        }
        @else if $i % 4 == 2 {
            .#{$className}#{$i} {
                @include box_color($trueblue);
            }
        }
        @else if $i % 4 == 3 {
            .#{$className}#{$i} {
                @include box_color($deepblue);
            }
        }
        @else if $i % 4 == 0 {
            .#{$className}#{$i} {
                @include box_color($brown);
            }
        }
    }
}
```

[Back to Top](#top)


# <a id="Tools"></a>Tools
+ SCSS      
SCSS is a godsend feature for me as not only was I more organized in sectioning my website, I was also able to use Mixins for cross-browser CSS and Variables for Colours, Fonts and Shadows. I am really happy that I learned SCSS and used it on this project.      

+ JQuery        
JQuery is something that I wanted to avoid for this portfolio until I needed it for page animations. It, however, saved me a lot of time, especially with my navigation bars.       

+ Google Analytics      
I incorporated Google Analytics as early as when I created my minimum viable product because it was easy to implement and Netlify allows me to insert the code snippet in every page of the website.        

+ Personalised Domain Name      
I also bought my domain name [www.glenndimaliwat.com](www.glenndimaliwat.com) as early as when I started the project. This motivated me more to work on the project as I did not want to waste the annual subscription fee on an empty domain.      


[Back to Top](#top)

# <a id="Optimisation"></a>Optimisation

+ Optimized images using [Optimizilla](http://www.optimizilla.com) and SASS Compression     
I wanted to improve the page load of my images and discovered this website. It dramatically reduced my main background image from 3.1 megabytes to 306 kilobytes. It also effectively reduced the size of my profile photo from 1 megabyte to 309 kilobytes.        

+ Optimized CSS and JavaScript using [Minify](https://www.npmjs.com/package/minifier)        
Like my images, I needed to improve the page load by minifying my CSS and JavaScript files. Minify allowed me to do this easily:        
    ```npm install -g minify```     
    ```minify animation.js --output animation.min.js --no-comments```       
    ```minify navigation.js --output navigation.min.js --no-comments```     

+ For CSS, SASS compression was able to optimise my SCSS automatically using the following syntax       
    ```sass --watch src/style.scss:dest/style.css --style compressed```


[Back to Top](#top)


# <a id="Testing"></a>Manual Testing
+ Page Performance validation using Google PageSpeed Insights
I tried my best to bring up the scores for both Desktop and Mobile by optimising every Image in my website. I also minified my CSS and JavaScript files to bring down the load time.        

    ![](http://www.glenndimaliwat.com/assets/screenshots/google-pagespeed-insights-desktop.png)     
    ![](http://www.glenndimaliwat.com/assets/screenshots/google-pagespeed-insights-mobile.png)      

+ HTML Code validation using W3 Validator
Apparently, font awesome icons were not recognised as valid texts for Heading 4 elements. I simply ignored these warnings because I already liked what my icons looked like and they are already coupled with the load animations I set for them.        
![](http://www.glenndimaliwat.com/assets/screenshots/w3-validator.png)

+ Page Load Performance testing on public wifi      
One of my objectives was to thoroughly test my website in worst case scenarios. As such, I tested my website on the following locations with public wifi.       
    - Chadstone Shopping Centre        
    - Southern Cross Station      
    - Telstra Air Access Points       

+ Usability Testing on multiple mobile devices      
Another objective was to test my website on different mobile devices to see the actual outcome and usability. As a special consideration for mobile devices, I have made the button sizes just right for touch presses. This makes navigation more comfortable for the viewer.      
    - Google Chrome Developer Tool         
    - Samsung Galaxy Note 4      
    - Apple iPhone/iPad Simulator (X-Code)       
    - Apple iPad Mini 2      
    - Apple iPhone 5s       
    - Apple iPhone 6s       
    - Asus Zenfone 3      

+ Usability Testing on different browsers       
Testing on multiple browsers actually happened while I was developing the website. I had 3 browsers open at one time and it made all the difference while I was coding my SCSS mixins.
    - Google Chrome (Version 60.0.3112.113) - Ok
    - Mozilla Firefox (Version 55.0.3) - Ok
    - Mozilla Firefox Focus (Mobile Only) - Ok
    - Safari (Version 10.1.2 (12603.3.8) - Ok
    - Internet Explorer 11 - Ok, but google fonts not loading
    - Internet Explorer 10 - Ok, but google fonts not loading
    - Internet Explorer 9 - Not supported
    - Internet Explorer 8 - Not supported

[Back to Top](#top)


# <a id="Final"></a>Final Product
![](http://www.glenndimaliwat.com/assets/screenshots/laptop-screenshot.png)
![](http://www.glenndimaliwat.com/assets/screenshots/mobile-screenshot.png)

[Back to Top](#top)
