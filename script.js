function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
} // Made by Yago Estévez (Twitter: @yagoestevez.com)

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "menu-items" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "HOME"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "ABOUT"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTFOLIO"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTACT"
          )
        )
      ),

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
     Nav Component
    ***********************/

const Nav = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "nav",
      { id: "navbar" },
      React.createElement(
        "div",
        { className: "nav-wrapper" },
        React.createElement(
          "p",
          { className: "brand" },
          "N Suraj",

          React.createElement("strong", null, " Kumar")
        ),

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          },

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
     Header Component
    ***********************/

const Header = (props) => {
  return React.createElement(
    "header",
    { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        React.createElement("span", { className: "line" }, "I do"),
        React.createElement("span", { className: "line" }, "graphic design"),
        React.createElement(
          "span",
          { className: "line" },
          React.createElement("span", { className: "color" }, "&"),
          " code."
        )
      ),

      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("a", { href: "#projects" }, "my portfolio"),
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "get in touch"
        )
      )
    )
  );
};

/***********************
     About Component
    ***********************/

const About = (props) => {
  return React.createElement(
    "section",
    { id: "about" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "Who's this guy?"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc full" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "My name is N Suraj Kumar."
          ),
          React.createElement(
            "p",
            null,
            "I am a web developer and UX designer based in the beautiful ancient City Hyderabad."
          ),

          React.createElement(
            "p",
            null,
            "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love film making and video editing, a hobby I'm taking along since the good old film cameras. Oh, and game development with App developmet; I have a passion for Game Development with Mobile Platform in Mind!"
          )
        ),

        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "What does he do?"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "I'm a programmer."
          ),
          React.createElement(
            "p",
            null,
            "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS. I also make the web pretty by using Sass, CSS and, whenever needed, popular UI/UX Tools like : Figma Adobe Xd"
          ),

          React.createElement(
            "p",
            null,
            "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc), Ruby On Rails, ASP.NET, Django & Flask. But, of course, whenever the project requires, I use MERN, MEAN, FREMP, PERN Stack ."
          ),
          React.createElement(
            "p",
            null,
            "For the databases or DBMS I Use MongoDB, MySQL, PostgresSQL, Redis"
          )
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Also a designer."
          ),
          React.createElement(
            "p",
            null,
            "I feel comfortable working with many Adobe products: Illustrator, Premiere , AfterEffects, Photoshop, InDesign, Lightroom or Xd are some kind of industry standards and I love working with them. I'm not limited to them, though: Gimp, Inkscape or Figma are also very valid applications that I've been working with."
          ),

          React.createElement(
            "p",
            null,
            "User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty things is particularly important for me."
          ),
          React.createElement(
            "p",
            null,
            "I made many Posters for The Entrepernuership Cell NIT Raipur..."
          )
        )
      )
    )
  );
};

/***********************
     Project Component
    ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
    ruby: "fab fa-ruby",
    java: "fab fa-java",
    android: "fab fa-android",
    design: "fab fa-figma",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return React.createElement(
    "div",
    { className: "project" },
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ),

    React.createElement(
      "div",
      { className: "project-details" },
      React.createElement(
        "div",
        { className: "project-tile" },
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "View source ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        ),

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Try it Live ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        )
      )
    )
  );
};

/***********************
     Projects Component
    ***********************/

const Projects = (props) => {
  return React.createElement(
    "section",
    { id: "projects" },
    React.createElement(
      "div",
      { className: "projects-container" },
      React.createElement(
        "div",
        { className: "heading" },
        React.createElement("h3", { className: "title" }, "My Works"),
        React.createElement("p", { className: "separator" }),
        React.createElement(
          "p",
          { className: "subtitle" },
          "Here's a list of ",
          React.createElement("u", null, "most"),
          " of the projects I've been working on lately. All of these were built during my personal adventures and some I hosted on",
          " ",
          React.createElement(
            "a",
            {
              href: "https://www.github.com/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "GitHub"
          ),
          ", where I've been coding for almost 3 years non-stop until I completed all the projects required to become a Full Stack Developer."
        )
      ),

      // React.createElement(
      //   "div",
      //   { className: "projects-wrapper" },
      //   React.createElement(
      //     Project,
      //     {
      //       title: "Anonymous Message Board.",
      //       img:
      //         "https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg",
      //       tech: "js css react node",
      //       link: "https://yagoestevez-anon-msg-board.glitch.me/",
      //       repo: "https://github.com/yagoestevez/anonymous-message-board",
      //     },

      //     React.createElement(
      //       "small",
      //       null,
      //       "Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router."
      //     ),

      //     React.createElement(
      //       "p",
      //       null,
      //       "This is a full-stack website that I made which lets the users read and post anonymous messages and replies."
      //     )
      //   )
      // ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Tinder Clone",
            img:
              "https://raw.githubusercontent.com/NacharamSuraj/TinderClone/main/images/1_phone.png",
            tech: "java kotlin android",
            link: "https://github.com/NacharamSuraj/TinderClone",
            repo: "https://github.com/NacharamSuraj/TinderClone",
          },

          React.createElement(
            "small",
            null,
            "Built using Java, Kotlin, Android Studio: With Firebase Backend."
          ),

          React.createElement(
            "p",
            null,
            "This is a full-stack Mobile Tinder Clone that I made which lets the users read and post anonymous messages and replies."
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Habitual Landing Page",
            img: "./img/habitual.png",
            tech: "css design",
            link: "https://nacharamsuraj.github.io/habitual-landing-page/",
            repo: "https://github.com/NacharamSuraj/habitual-landing-page",
          },

          React.createElement(
            "small",
            null,
            "I made the Design Using Figma, And Images using Adobe Photoshop"
          ),

          React.createElement(
            "p",
            null,
            "Its a just a Mockup For any App Landing Page!"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Flutter Cat Or Dog App",
            img:
              "https://raw.githubusercontent.com/NacharamSuraj/catvsdog/master/first.png",
            tech: "android",
            link:
              "https://drive.google.com/file/d/1j_26w2_HyT8bR9vqTBQW0EOHIaBI75od/view?usp=sharing",
            repo: "https://github.com/NacharamSuraj/catvsdog",
          },

          React.createElement(
            "small",
            null,
            "This an flutter app which using teachable machine ml to recognize weather the input is dog or cat"
          ),

          React.createElement(
            "p",
            null,
            "This Uses convolutional neural network and imports as .tflite file into the flutter project ."
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Game Of Thrones Poster",
            img: "./img/poster1.jpg",
            tech: "design",
            link: "./img/poster1.jpg",
            repo:
              "https://www.instagram.com/p/BzSAb9dghAx/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Photoshop, Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            "Here are a few entrepreneurial lessons you can implement in your startup which are inspired by GoT!"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Aavartan’19 Poster",
            img: "./img/poster2.jpg",
            tech: "design",
            link: "./img/poster2.jpg",
            repo:
              "https://www.instagram.com/p/B2o4IYGgMBq/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            "The Entrepreneurship Cell, wishes great success and good fortune to Team Technocracy for Aavartan’19."
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Happy Engineer's Day! Poster",
            img: "./img/poster3.jpg",
            tech: "design",
            link: "./img/poster3.jpg",
            repo:
              "https://www.instagram.com/p/B2cET8qg4kE/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Photoshop"
          ),

          React.createElement(
            "p",
            null,
            "The problem in this business isn’t to keep people from stealing your ideas; it's making them steal your ideas!"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Fantastic New Year! Poster",
            img: "./img/poster4.jpg",
            tech: "design",
            link: "./img/poster4.jpg",
            repo:
              "https://www.instagram.com/p/B6vzkwbAFDw/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Photoshop, Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            "You have to believe that the dots will somehow connect in your future”- Steve Jobs"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Rube Gold-Berg Machine Poster",
            img: "./img/poster5.jpg",
            tech: "design",
            link: "./img/poster5.jpg",
            repo:
              "https://www.instagram.com/p/B3ug9Ijgmq8/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            "Gather all you can and make a machine, or a cool system to perform trick shots, out of random materials. E-Cell and I-Cell together bring you this opportunity to be a dude perfect."
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "ROBOTiX CLUB for the rescue Poster",
            img: "./img/poster6.jpg",
            tech: "design",
            link: "./img/poster6.jpg",
            repo:
              "https://www.instagram.com/p/B3yvI73gNkS/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            "Do you feel you miss out on awesomeness/? Well, here's ROBOTiX CLUB for the rescue."
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Grand Garba Eve Poster",
            img: "./img/poster7.jpg",
            tech: "design",
            link: "./img/poster7.jpg",
            repo:
              "https://www.instagram.com/p/B2wzpvzgoHJ/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this poster Using Adobe Illustrator"
          ),

          React.createElement(
            "p",
            null,
            'Get ready to witness the "Grand Garba Eve". Cause, in your veins the sway of garba will surely be flown.'
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Childrens Day Motion Graphic",
            img: "./img/video1.png",
            tech: "design",
            link: "./img/video1.mp4",
            repo:
              "https://www.instagram.com/p/B41UwJSguEL/?utm_source=ig_web_copy_link",
          },

          React.createElement(
            "small",
            null,
            "I made this Motion Graphic Using Adobe Illustrator & Adobe After Effects"
          ),

          React.createElement(
            "p",
            null,
            `Let them play,
            Let them Sing,
            Let them dance,
            Let them explore the world beyond the books.
            Let them live their childhood as it should be.`
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "404 Landing Page",
            img: "./img/404.png",
            tech: "css design",
            link: "https://nacharamsuraj.github.io/404_not_found/",
            repo: "https://github.com/NacharamSuraj/404_not_found",
          },

          React.createElement("small", null, "I made this using css and figma"),

          React.createElement(
            "p",
            null,
            `Simple 404 not found website with scare crow`
          )
        )
      )
    )
  );
};

/***********************
     Contact Component
    ***********************/

const Contact = (props) => {
  return React.createElement(
    "section",
    { id: "contact" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-wrapper" },
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement(
            "p",
            { className: "title" },
            "Want to ",
            React.createElement("br", null),
            "contact me?"
          ),

          React.createElement("p", { className: "separator" }),
          React.createElement(
            "p",
            { className: "subtitle" },
            "Please, use the form below or send an email to ",
            "",
            React.createElement(
              "span",
              { className: "mail" },
              "web",

              React.createElement("i", { className: "fas fa-at at" }),
              "NSurajKumar",

              React.createElement("i", { className: "fas fa-circle dot" }),
              "tech"
            ),
            ":"
          )
        ),

        React.createElement(SocialLinks, null)
      ),

      React.createElement(
        "form",
        { id: "contact-form", action: "#" },
        React.createElement("input", {
          placeholder: "Name",
          name: "name",
          type: "text",
          required: true,
        }),
        React.createElement("input", {
          placeholder: "Email",
          name: "email",
          type: "email",
          required: true,
        }),
        React.createElement("textarea", {
          placeholder: "Message",
          type: "text",
          name: "message",
        }),
        React.createElement("input", {
          className: "button",
          id: "submit",
          value: "Submit",
          type: "submit",
        })
      )
    )
  );
};

/***********************
     Footer Component
    ***********************/

const Footer = (props) => {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement("h3", null, "THANKS FOR VISITING"),
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " N Suraj Kumar"
      ),
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
     Social Links Component
    ***********************/

const SocialLinks = (props) => {
  return React.createElement(
    "div",
    { className: "social" },
    React.createElement(
      "a",
      {
        href: "https://twitter.com/N_SK024",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Twitter profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-twitter" })
    ),

    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/NacharamSuraj",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-github" })
    ),

    React.createElement(
      "a",
      {
        href: "https://www.instagram.com/madebysuraj/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's instagram Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-instagram" })
    )
  );
};

/***********************
     Main Component
    ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
