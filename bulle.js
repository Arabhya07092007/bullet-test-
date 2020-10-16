
var lbullet,lwall;

function  hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x+lwall.width;
wallLeftEdge =  lwall.x;

if (bulletRightEdge >= wallLeftEdge){

    return true;
}

return false;


}