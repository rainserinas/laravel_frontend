$(function(){
    checkIfLoginPage();
    setSession();
    removeSession();
});

function checkIfLoginPage() {
    var pathArray = window.location.pathname.split( '/' );
    var first_segment = pathArray[1];

    if(first_segment !== 'login') {
        checkIfSessionExists();
    } else {
        $.session.clear();
    }
}

function checkIfSessionExists() {
    var userIdSession = $.session.get('user_id');
    console.log(userIdSession);
    if(userIdSession === "" || userIdSession === undefined) {
        $("body").hide();
        location.href = '/login';
    }
}

function setSession() {
    $(".set-session").on('click', function(){
        $.session.set('user_id', 53);
    });
}

function removeSession() {
    $(".remove-session").on('click', function(){
        $.session.clear();
        location.href = "/login";
    });
}
