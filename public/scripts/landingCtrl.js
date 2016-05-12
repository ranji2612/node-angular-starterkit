app.controller('courseCtrl', function($scope,$http,$routeParams) {
    console.log('CourseCtrl under control..');
    $scope.code = JSON.parse(readCookie('code'));
    $scope.run = function() {
        formdata = $scope.code;
        console.log('Sending',{"data":JSON.stringify($scope.code)});
        setCookie('code',JSON.stringify(($scope.code)),123,1);
        $scope.err = "";
        $http.post('/run', {"data":JSON.stringify($scope.code)})
        .success(function(data){
            console.log('Success');
            document.getElementById("res").innerHTML = '<img src="/replPrg1.svg" class="col-xs-12"/>';
                document.getElementById("res").innerHTML = '';
                document.getElementById("res").innerHTML = '<img src="/../gsapp_site/replPrg.svg" class="col-xs-12"/>';
                window.location.href = "";
            
        })
        .error(function(err){
            console.log(err);
            document.getElementById("res").innerHTML = '';
            $http.get('/replPrg.err')
            .success(function(data){
                $scope.err = data; 
            });
        });
    }
});

function setCookie( name, value, days, path ) {
    var date = new Date();
    date.setTime( date.getTime() + ( days*24*60*60*1000 ) );
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + '=' + value + expires + '; path=' + path;
}

function readCookie(cookieName) {
    var theCookie=""+document.cookie;
    var ind=theCookie.indexOf(cookieName);
    if (ind==-1 || cookieName=="") return "";
    var ind1=theCookie.indexOf(';',ind);
    if (ind1==-1) ind1=theCookie.length;
    return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
}

function deleteCookie( cookieName ) {
    if( readCookie( cookieName ) ) {
        setCookie( cookieName, '', 0, '/' );
    }
}
