window.fbAsyncInit = function () {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: '481186559372148',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.3'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            getFbUserData();
        }
    });
};


// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', function (response) {
        console.log(JSON.stringify(response));
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        var formData = new FormData();
        formData.append("name", response.name);
        xhttp.open("POST", "/account/apiLogin", true);
        xhttp.send(formData);
    });
}


module.exports = {
    login: function fbLogin() {
        FB.login(function (response) {
            if (response.authResponse) {
                getFbUserData();
            } else {
                document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
            }
        }, {
            scope: 'email'
        });
    },

    // Fetch the user profile data from facebook

    // Logout from facebook
    logout: function fbLogout() {
        FB.logout(function (response) {});
    },
}