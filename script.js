var form = document.getElementById("forms");
window.onload = function () {
    form.onclick = function (e) {
        e.preventDefault();
        var cityName = document.getElementById("cityNameForm").value;
        var description = document.getElementById("descriptionForm").value;
        //var image = document.getElementById("img").value;
        var toPrint = '<div class="container"><img src="" class="image"><div class="overlay"><div class="text">'+description+'</div></div></div><p class="cityName">'+cityName+'</p></div>';
        document.getElementById('flex-container').append(toPrint);
    }
}
