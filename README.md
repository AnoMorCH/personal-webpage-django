# My Portfolio 
The information related to my job as a program engineer is stored here (my work experience, my favorite projects and some professional related data about me).

## About It
The project is made using `Django Web Framework (Python)`. It has an ability of **language switching of HTML templates** and **automatic uploading of another projects** using ``JSON`` instead of usual database (an interesting choice, isn't it? More about that is written in the two following sections). It's fully tested using **unittest**.

## Language Switching of HTML Templates
The switching logic is implemented using ``JavaScript``. The scripts are located at ``portfolio_app/static/portfolio_app/scripts`` and have the words ``language`` or ``translation`` inside of them (like ``language-switches`` or ``burger-translation`` folders). 

The translation itself is made using ``JSON``. These files are placed at ``portfolio_app/static/portfolio_app/language``. They look like this:

```json
{
  "english": {
    "home-url": "home",
    "about-me-url": "about me",
    "projects-url": "projects"
  },
  "russian": {
    "home-url": "дом",
    "about-me-url": "обо мне",
    "projects-url": "проекты"
  }
}
```

* ``english`` and ``russian`` are available languages;
* ``home-url``, ``about-me-url`` etc are ids of the elements inside of HTML we want to translate (eg ``home-url`` for ``<p id="home-url">hello</p>``);
* ``home`` and ``дом`` are translations in English and Russian correspondingly.

For example, to handle ``burger.json`` translation inside of ``language/burger-translation`` there is the JS file named ``burger.js`` inside of ``scripts/language-switches/burger-translation/burger.js``. The same is true for the other json files.

## Automatic Uploading of Another Projects
To make update of the projects inside of the portfolio easier, there is a function of automatically add a project.

To do it, please follow the instruction
1. Copy **the pattern** placed at `portfolio_app/static/portfolio_app/language/templates-translation/projects/1.json` and paste it inside of `portfolio_app/static/portfolio_app/language/templates-translation/projects`.
2. Number the file with step 1 (eg if the last file was named `2.json`, the next should be named as `3.json`; after `3.json` make `4.json` etc).
3. Delete the old translation and make a new one ([how the translation work](#language-switching-of-html-templates)). It isn't recommended to add or delete lines inside of **the pattern**.
4. Create a new folder inside of ``portfolio_app/static/portfolio_app/imgs/projects`` named as the json file from the clause 2 (eg for `2.json` create a folder `2`).
5. Inside the newly made folder create a cover image named as `cover.png`. 
6. Also, you can add additional images to the project ordered like `1.png`, `2.png`, `3.png` etc.
7. If everything is made correctly, the new project has to be created. A user can access it going to the link `project/<project_id>` (eg `project/1` to access the first project).