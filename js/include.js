$(document).ready( function () {
  let footerHTML = `<div class="container-fluid">
                      <div class="row">
                        <div class="col">
                          <a href="index.html">
                            <img src="images/whale.png" height=150 alt="Whale" title="Home">
                          </a>
                          <p>Started 2020. <em>A rona project</em> </p>
                        </div>
                        <div class="col">
                          <a class="nav-link" href="watersheds.html">Watersheds</a>
                          <a class="nav-link" href="hiking.html">Hiking</a>
                          <a class="nav-link" href="sitemap.txt">Sitemap</a>
                        </div>
                        <div class="col">
                          <div class="" id="social" style="text-align:right;">
                            <a target="_blank" href="https://www.instagram.com/kevanleelum/?hl=en"><img src="images/instagram-brands.svg" height=40 alt="Instagram"></a>
                            <a target="_blank" href="https://www.facebook.com/kevan.leelum/"><img src="images/facebook-square-brands.svg" height=40 alt="Facebook"></a>
                            <a target="_blank" href="https://www.linkedin.com/in/kevan-lee-lum-388a7125/"><img src="images/linkedin-brands.svg" height=40 alt="LinkedIn"></a>
                          </div>
                        </div>
                      </div>
                    </div>`;

  let footer = document.getElementsByTagName('footer')[0];
  footer.innerHTML = footerHTML;
});
