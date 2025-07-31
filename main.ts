let kill = 0
player.onItemInteracted(DIAMOND, function () {
    agent.teleportToPlayer()
    builder.place(TNT)
})
player.onChat("error666", function () {
    music.playMusic(MusicDisc.Pigstep)
})
function error666 (num: number, booleano: boolean, array: any[], position: Position, texto: string) {
    player.say("wtf")
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    gameplay.setDifficulty(HARD)
    mobs.spawn(WOLF, pos(0, 0, 0))
    kill = 0
}
