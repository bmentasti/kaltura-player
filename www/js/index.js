angular.module('app', [])
    .controller('PlayerController', function PlayerController($scope) {
    $scope.video = function() {
        try {

            var kalturaPlayer = KalturaPlayer.setup({
                targetId: "kaltura-player",
                provider: {
                    partnerId: 1164832,
                    uiConfId: 42380172
                },
                playback: {
                    autoplay: true
                }
            });

            kalturaPlayer.loadMedia({entryId: '1_jj0pk8yw'});
        } catch (e) {
            console.error(e.message)
        }
    }
});

