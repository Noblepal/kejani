<?php
    include_once 'psl-config.php';
    
    function sec_session_start(){
        $session_name = 'sec_session_id';
        $secure = SECURE; 
        
        //stop javascript from accessing the session ID
        $httponly = true;
        
        //force sessions to only use cookies
        if(ini_set('session.use_only_cookies', 1) === FALSE){
            header("Location: ../error.php?err=Could not initiate a secure session (ini_set)");
            exit();
        }
        
        //get current cookie parameters
        $cookieParams = session_get_cookie_params();
        session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly);
        session_name($session_name);
        session_start(); //start PHP session
        session_regenerate_id(); //regenerate the session, delete the old one
        
    }

?>