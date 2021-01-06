controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    forsach += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    forsach += -1
})
let forsach = 0
let graund = 1632
let G = 9.8
tiles.setTilemap(tiles.createTilemap(hex`0a006900010101010101010101010101010101010101010101010401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020203030303030303030303`, img`
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    ..........
    2222222222
    2222222222
    `, [myTiles.transparency16,myTiles.tile2,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen))
let mySprite = sprites.create(img`
    ...............cc...............
    ............ccc65c66............
    ............c6c55c76............
    ...........6cc7557c66...........
    ..........cc77777577c6..........
    .........666c677776cc66.........
    ........c7776c7c67657576........
    ........ccc666c666655666........
    ......c66cc7666667777c6566......
    .....c777c77665667767755576.....
    .....cc66cccc555677cc665666.....
    ....c6766666c756767677777766....
    ...cc777666666677767777667c66...
    .666cc6677666667777777776677666.
    .67776577c676677777776677677776.
    cc666555c67767776777756cc7767666
    c666775667766776c776555c67776c66
    .c6777666ccc667c676cc566667776c.
    .cc6666766666cc66666666776cc666.
    ...66776c666566666677667766cccc.
    ...cc76c66755566667677667776c...
    ...6cccc677656666776777c77666...
    ......6ccc7c67767776c776cc......
    ........ccc6777c67776cc6........
    ...........cc77c67766...........
    .............6c6666.............
    ............5522225.............
    ..........55222222225...........
    .............5222552............
    ..............525...............
    ..............525...............
    ...............5................
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
mySprite.ay = G
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.say("" + Math.trunc(mySprite.vy) + " m/s   " + Math.trunc(mySprite.y) + "")
    mySprite.ay = G - forsach
})
