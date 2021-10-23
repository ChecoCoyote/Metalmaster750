controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Magia_verde = sprites.createProjectileFromSprite(assets.image`Magia verde`, Hechicera, 0, -100)
    info.setLife(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Bola_de_fuego.destroy()
    Bola_de_fuego.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bola_de_fuego.destroy()
    info.changeLifeBy(-1)
})
let Bola_de_fuego: Sprite = null
let Magia_verde: Sprite = null
let Hechicera: Sprite = null
Hechicera = sprites.create(assets.image`M_Atras`, SpriteKind.Player)
Hechicera.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(Hechicera, 150, 150)
game.onUpdateInterval(500, function () {
    Bola_de_fuego = sprites.create(assets.image`Bola de fuego`, SpriteKind.Enemy)
    Bola_de_fuego.setVelocity(0, 100)
    Bola_de_fuego.setPosition(randint(0, 150), 0)
})
