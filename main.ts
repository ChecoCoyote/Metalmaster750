controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Magia_verde = sprites.createProjectileFromSprite(assets.image`Magia verde`, Hechicera, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bola_de_fuego.destroy(effects.warmRadial, 100)
    Magia_verde.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bola_de_fuego.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
let Bola_de_fuego: Sprite = null
let Magia_verde: Sprite = null
let Hechicera: Sprite = null
Hechicera = sprites.create(assets.image`M_Atras`, SpriteKind.Player)
Hechicera.setStayInScreen(false)
info.setLife(3)
controller.moveSprite(Hechicera, 150, 150)
game.onUpdateInterval(1000, function () {
    Bola_de_fuego = sprites.create(assets.image`Bola de fuego`, SpriteKind.Enemy)
    Bola_de_fuego.setVelocity(0, 100)
    Bola_de_fuego.setPosition(randint(12, 75), 0)
})
