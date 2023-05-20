// Add Blog

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let desc = document.getElementById("desc").value;
  let image = document.getElementById("upload").files;

  const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
  const reactIcon = '<i class="fa-brands fa-react fa-xl fa-fw"></i>';
  const phpIcon = '<i class="fa-brands fa-php fa-xl fa-fw"></i>';
  const javaIcon = '<i class="fa-brands fa-java fa-xl fa-fw"></i>';

  let js = document.getElementById("tech_js").checked ? jsIcon : "";
  let react = document.getElementById("tech_react").checked ? reactIcon : "";
  let php = document.getElementById("tech_php").checked ? phpIcon : "";
  let java = document.getElementById("tech_java").checked ? javaIcon : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    start,
    end,
    desc,
    js,
    react,
    php,
    java,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  x = 0;
  for (let i = x; i < dataBlog.length; i++) {
    document.getElementById("content").innerHTML += `
    <div class="project__card">
          <div class="project__card__img">
            <img src="${dataBlog[i].image}" alt="#" />
          </div>
          <div class="project__card__body">
            <a href="/content/project.html"><h4>${dataBlog[i].title}</h4></a>
            <p>${dataBlog[i].start} - ${dataBlog[i].end}</p>
            <p>${dataBlog[i].desc}</p>
            <div class="flex iconTech">
            ${dataBlog[i].js}
            ${dataBlog[i].react}
            ${dataBlog[i].php}
            ${dataBlog[i].java}
            </div>
            <div class="btn__card">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>
        </div>
    `;
  }
}
