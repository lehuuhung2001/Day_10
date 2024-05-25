var upload = document.querySelector("#myPicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");
var gallery = document.querySelector(".gallery");
upload.addEventListener("change", function (e) {
  var file = upload.files[0];
  var list = upload.files;
  if (!file) {
    return;
  }
  if (file.name.endsWith(".jpg")) {
    error.textContent = "Hinh anh JPG";
    return;
  } else {
    error.textContent = "";
  }

  if (file.size / (1024 * 1024) > 5) {
    error.textContent = "Hình ảnh đã hơn 5MB";
    return;
  } else {
    error.textContent = "";
  }
  console.log(list);
  for (const item of list) {
    var img = document.createElement("img");
    img.src = URL.createObjectURL(item);
    gallery.appendChild(img);
  }
  console.log(gallery);
});
