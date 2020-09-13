namespace SpriteKind {
    export const Key = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    keys.destroy()
    hero_has_key = true
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
	
})
// Opening with Key Version 1 :
// Door opens as soon as key is picked up, DOOR is a wall tile.
let hero_has_key = false
let keys: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101020101010104010101010101010101010201010104040101010401010101010102010101040401040404010101010101020101010404040404040101010101010201010101010404040101010101010102010101010101010101010104040101020101010101010101010104040401010201010101050101010101040404010103040404040101010101010101010101020404040101010101010101010101010204040101010101010101010101010102040401010101010104040101010101020101010101010101040404010101010201010101010101010104040401010102010101010101010101040404010101020101010101`, img`
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.dungeon.floorLightMoss,myTiles.tile1,sprites.castle.tilePath5,sprites.dungeon.chestOpen], TileScale.Sixteen))
let kitty = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . c e e c . . c e e c . . . 
    . c b e e . . e e b c . . . 
    . c 3 b e e b e b 3 c . . . 
    . . b 3 e e e e 3 b f . . . 
    . d e e e e e e e e d . . . 
    . d e f e e e e f e d . b . 
    . . e e f e e f e e . . . e 
    . . b e e b b e e 2 . . . e 
    . . . 2 2 2 2 2 2 b b . . e 
    . . . b e e e e e e b b e b 
    . . . e e e e e b e e . . . 
    . . . e . . . e . . e . . . 
    `, SpriteKind.Player)
controller.moveSprite(kitty)
kitty.setPosition(21, 44)
keys = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f . . . . . f f f f 
    f 5 5 5 5 5 f . . . . . f 5 5 f 
    f 5 d d d 5 f f f f f f f 5 5 f 
    f 5 d d d 5 5 5 5 5 5 5 5 5 5 f 
    f 5 d d d 5 f f f f f 5 5 f f f 
    f 5 d d d 5 f . . . f 5 5 f . . 
    f 5 5 5 5 5 f . . . f f f f . . 
    f f f f f f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Key)
keys.setPosition(116, 122)
scene.cameraFollowSprite(kitty)
hero_has_key = false
forever(function () {
    if (kitty.tileKindAt(TileDirection.Right, myTiles.tile1)) {
        if (kitty.tileKindAt(TileDirection.Right, myTiles.tile1) && hero_has_key == true) {
            kitty.say("Open the door dum dum", 500)
            tiles.setWallAt(tiles.getTileLocation(10, 8), false)
        } else {
            kitty.say("You need a key dummy", 500)
        }
    }
})
