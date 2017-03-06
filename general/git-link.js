/**
 * Created by LzxHahaha on 2017/3/5.
 */

function renderLink(url) {
  var body = document.getElementsByTagName('body')[0];
  var gitButton = document.createElement('a');
  gitButton.style.position = 'fixed';
  gitButton.style.padding = "10px 15px";
  gitButton.style.bottom = "20px";
  gitButton.style.right = 0;
  gitButton.style.background = "#007ACC";
  gitButton.innerHTML = "<a href=\"" + url + "\" target='_blank'>Open in Github.</a>";
  body.appendChild(gitButton);
}