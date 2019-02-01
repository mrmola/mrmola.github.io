module.exports.isProd = false,
module.exports.enableHttps = module.exports.isProd,
module.exports.serverTickRate = 1e3 / 30,
module.exports.serverSendRate = 100,
module.exports.clientSendRate = 1e3 / 30,
module.exports.dltMx = Math.round(1e3 / 30),
module.exports.maxPlayers = 8,
module.exports.serverSpread = 3,
module.exports.minServerSpace = 3,
module.exports.gamesPerServer = 5,
module.exports.serverBrowserRate = 1e4,
module.exports.maxPlayersTotal = module.exports.maxPlayers * module.exports.gamesPerServer + 50,
module.exports.kickTimer = 9e4,
module.exports.endTimer = 2e4,
module.exports.endAnim = 5e3,
module.exports.serverConfig = [{
        name: "Players",
        varN: "maxPlayers",
        def: 2,
        max: 10,
        maxF: 16,
        min: 1,
        step: 1
    }, {
        name: "Lives",
        varN: "lives",
        def: 0,
        max: 10,
        min: 0,
        step: 1
    }, {
        name: "Minutes",
        varN: "gameTime",
        def: 4,
        max: 60,
        min: 0,
        step: 1
    }, {
        name: "Gravity",
        varN: "gravMlt",
        dontChange: !0,
        def: 1,
        max: 2,
        min: .1,
        step: .1
    }, {
        name: "Jump Force",
        varN: "jumpMlt",
        dontChange: !0,
        def: 1,
        max: 3,
        min: .1,
        step: .1
    }, {
        name: "Time Scale",
        varN: "deltaMlt",
        dontChange: !0,
        def: 1,
        max: 1.5,
        min: .1,
        step: .1
    }, {
        name: "Strafe Speed",
        varN: "strafeSpd",
        dontChange: !0,
        def: 1.2,
        max: 2,
        min: 1,
        step: .1
    }, {
        name: "Health Multiplier",
        varN: "healthMlt",
        dontChange: !0,
        def: 1,
        max: 3,
        min: .1,
        step: .1
    }, {
        name: "Auto Jump",
        varN: "autoJump",
        bool: !0
    }, {
        name: "Hide Nametags",
        varN: "nameTags",
        bool: !0
    }
],
module.exports.prefabIDS = ["CUBE", "CRATE", "BARREL", "LADDER", "PLANE", "SPAWN_POINT", "CAMERA_POSITION", "VEHICLE", "STACK", "RAMP", "SCORE_ZONE", "BILLBOARD", "DEATH_ZONE", "PARTICLES", "OBJECTIVE", "TREE"],
module.exports.textureIDS = ["WALL", "DIRT", "FLOOR", "GRID", "GREY", "DEFAULT", "ROOF", "FLAG", "GRASS", "CHECK"],
module.exports.objectLimit = 3500,
module.exports.objectLimitF = 6e3,
module.exports.spawnLimit = 20,
module.exports.gravity = 15e-5,
module.exports.deathY = -100,
module.exports.skyScale = 18e3,
module.exports.shadowDst = 1200,
module.exports.shadowRes = 1024,
module.exports.shadowOff = .004,
module.exports.lightDistance = 500,
module.exports.cornerPad = 1,
module.exports.cornerScl = 2.5,
module.exports.cornerH = 7,
module.exports.wallH = 5,
module.exports.wallW = .8,
module.exports.crateScale = 6,
module.exports.stackScale = 6,
module.exports.barrelScale = 4,
module.exports.treeScale = 10,
module.exports.vehicleScale = 20,
module.exports.barrelMlt = 1.5,
module.exports.ladderWidth = 3.2,
module.exports.ladderScale = .5,
module.exports.terrainGrid = 8,
module.exports.otherSoundMlt = .55,
module.exports.maxParticles = 100,
module.exports.explosionRange = 200,
module.exports.chatMaxLength = 70,
module.exports.chatInterval = 800,
module.exports.voiceChatInterval = 2e3,
module.exports.voiceChatMaxLength = 5,
module.exports.movDirs = [];
for (var n = 0; 8 > n; ++n)
    module.exports.movDirs.push(-Math.PI + (n + 1) * Math.PI / 4);
module.exports.interpolation = 1.1,
module.exports.stateHistory = 1e3,
module.exports.syncFreq = 800,
module.exports.pingCount = 10,
module.exports.mouseSens = .0024,
module.exports.camChaseTrn = .0022,
module.exports.camChaseSpd = .0012,
module.exports.camChaseSen = .2,
module.exports.camChaseDst = 24,
module.exports.menuCamDist = 200,
module.exports.menuCamAngle =  - .5,
module.exports.menuCamSpeed = .1,
module.exports.animMult = 1.2,
module.exports.leanPull = .99,
module.exports.leanSens = .04,
module.exports.leanMax = .16,
module.exports.leanPullZ = .99,
module.exports.leanMltZ = .02,
module.exports.bobMltY = .03,
module.exports.bobMltZ = .05,
module.exports.bobPullY = .985,
module.exports.bobPullZ = .99,
module.exports.landPull = .994,
module.exports.landPullV = .985,
module.exports.aimAnimMlt = .18,
module.exports.aimSlow = .55,
module.exports.aimJumpSlow = .85,
module.exports.stepAnim = .075,
module.exports.stepMlt = .25,
module.exports.stepPull = .995,
module.exports.maxHealth = 100,
module.exports.passiveInc = 500,
module.exports.cameraHeight = 1.5,
module.exports.playerSpeed = 42e-5,
module.exports.ladderSpeed = .035,
module.exports.ladderDecel = .97,
module.exports.groundDecel = .99,
module.exports.airSpeed = 47e-6,
module.exports.airDecel = .9996,
module.exports.jumpVel = .072,
module.exports.jumpPush = .1,
module.exports.decelMin = 1e-4,
module.exports.climbHeight = 3,
module.exports.wpnSpin = .018,
module.exports.materialDens = {
    flesh: .2,
default:
    .5
},
module.exports.propGlows = {
    vehicle: !0
},
module.exports.nameOffset = .6,
module.exports.nameOffsetHat = .8,
module.exports.maxNameLength = 14,
module.exports.maxPassLength = 16,
module.exports.playerHeight = 11,
module.exports.chestWidth = 2.6,
module.exports.chestScale = 1.3,
module.exports.armScale = 1.3,
module.exports.legScale = 1.3,
module.exports.uArmLength = 2.7,
module.exports.armInset =  - .1,
module.exports.lArmLength = 2.7,
module.exports.headScale = 2,
module.exports.armOff =  - .8,
module.exports.legHeight = 4.2,
module.exports.playerScale = (2 * module.exports.armScale + module.exports.chestWidth + module.exports.armInset) / 2,
module.exports.hitBoxPad = 1,
module.exports.tracerMinDst = 20,
module.exports.tracerMaxDst = 500,
module.exports.tracerChance = 1,
module.exports.crouchLean =  - .1 * Math.PI,
module.exports.crouchDst = 2.5,
module.exports.crouchSlow = .3,
module.exports.crouchSpeed = .007,
module.exports.crouchJump = .25,
module.exports.crouchSpread = .4,
module.exports.crouchAnim = 8e-4,
module.exports.crouchAnimMlt = .5,
module.exports.spreadMove = 30,
module.exports.spreadFall = 35,
module.exports.spreadRecover = .985,
module.exports.spreadAdj = 63e-5,
module.exports.spreadMlt = 400,
module.exports.recoilMlt = .3,
module.exports.maxLevel = 102,
module.exports.assistTime = 5e3,
module.exports.assistScore = 25,
module.exports.assistMin = 20,
module.exports.medalAnim = 1e3,
module.exports.medalDelay = 900,
module.exports.scoreStreak = 2e3,
module.exports.feedTimer = 1500,
module.exports.spinTimer = 1800,
module.exports.endStats = ["sid", "name", "score", "kills", "deaths", "reward"],
module.exports.endForm = {
    reward: function (t) {
        return t + "KR"
    },
    time: function (t, e, n) {
        return n.timer || "DNF"
    },
    infected: function (t, e, n) {
        return n.convs
    },
    found: function (t, e, n) {
        return n.convs
    }
},
module.exports.hitLife = 2e3,
module.exports.regenDelay = 5e3,
module.exports.regenVal = .1,
module.exports.sprayTimer = 1e3,
module.exports.sprayRange = 25,
module.exports.sprayScale = 15,
module.exports.deathDelay = 2800,
module.exports.deathFollowD = 100,
module.exports.suicides = ["suicide", "uninstall life", "toaster bath", "alt f4", "not alive", "neck rope", "sudoku", "scooter ankle", "death.exe"],
module.exports.fov = 70,
module.exports.viewDist = 2e3,
module.exports.nameVisRate = 200,
module.exports.worldUV = 60,
module.exports.ambientVal = .3,
module.exports.ambD = 2,
module.exports.ambMlt = 15,
module.exports.ambOff = .1,
module.exports.ambScale = 10,
module.exports.ambBleed = 0,
module.exports.boosterSpd = .002,
module.exports.rankVar = .03,
module.exports.newDataInterval = 6e4,
module.exports.socials = ["leaders", "profile", "maps"],
module.exports.leaderQueries = ["score", "kills", "wins", "timeplayed", "funds", "clan"],
module.exports.leaderCal = {
    player_score: function (e) {
        var n = Math.max(1, Math.floor(module.exports.rankVar * Math.sqrt(e)));
        return "<span class='floatR'><img src='./img/levels/" + Math.max(Math.min(module.exports.maxLevel - 2, n.roundToNearest(3) - 2), 0) + ".png' class='rnkIcon'>" + n + "</span>"
    },
    player_kills: function (t) {
        return t + "<span class='lName'> kills</span>"
    },
    player_wins: function (t) {
        return t + "<span class='lName'> wins</span>"
    },
    player_funds: function (t) {
        return t + " KR"
    },
    player_timeplayed: function (t) {
        var e = t / 1e3 / 60,
        n = parseInt(e % 60);
        e /= 60;
        var i = parseInt(e % 24);
        e /= 24;
        var r = parseInt(e);
        return (r ? r + "d " : "") + (i ? i + "h " : "") + (n || 0) + "m "
    }
}