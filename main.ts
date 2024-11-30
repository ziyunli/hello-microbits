input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.UntilDone)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("JASPER")
})
