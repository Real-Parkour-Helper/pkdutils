## [1.9.4](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.9.3...v1.9.4) (2025-04-10)


### Bug Fixes

* clearer error messages when catching exceptions thrown by interceptors, wrap outgoing handlers in try / catch as well ([ad85863](https://github.com/Real-Parkour-Helper/pkdutils/commit/ad85863a7b1582fc1d971e9746821bf11784351c))
* fixed chunk buffer error ([b26ec0c](https://github.com/Real-Parkour-Helper/pkdutils/commit/b26ec0cd068132c30303d5c8e4a0a90fc8a2809c))

## [1.9.3](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.9.2...v1.9.3) (2025-04-10)


### Bug Fixes

* packet interceptors able to specify packets to receive regardless of in-game status ([8ef74e3](https://github.com/Real-Parkour-Helper/pkdutils/commit/8ef74e328e19d05248445617809a05e856e7fa82))
* re-arrange interceptor order ([1a1a4df](https://github.com/Real-Parkour-Helper/pkdutils/commit/1a1a4df6fe5a20f5fca7fe51a3a7472acd1bd730))

## [1.9.2](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.9.1...v1.9.2) (2025-04-10)


### Bug Fixes

* output personal boostless time instead of best ([ae34e6b](https://github.com/Real-Parkour-Helper/pkdutils/commit/ae34e6b83065652d01a6eee8527f38c1f51e0373))

## [1.9.1](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.9.0...v1.9.1) (2025-04-10)


### Bug Fixes

* replace localhost with the actual url ([7345c8d](https://github.com/Real-Parkour-Helper/pkdutils/commit/7345c8de0f5237e41ce48eb6e075145b136c4824))

# [1.9.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.8.1...v1.9.0) (2025-04-10)


### Features

* send seeds to blrkbot and output the results ([ccf172d](https://github.com/Real-Parkour-Helper/pkdutils/commit/ccf172d7687e83815b9f3a1857c8271e582af3e5))

## [1.8.1](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.8.0...v1.8.1) (2025-04-10)


### Bug Fixes

* add colors to the scoreboard ([2d9b17c](https://github.com/Real-Parkour-Helper/pkdutils/commit/2d9b17c8a8826cf8bb2cacb012af4b5ed979e175))
* display "DONE" when a player finishes the game ([8685b38](https://github.com/Real-Parkour-Helper/pkdutils/commit/8685b3843aae9ab3a43febfdf668f321cbe340e1))
* fit as much of the ign as possible ([6a7fcd7](https://github.com/Real-Parkour-Helper/pkdutils/commit/6a7fcd79de5cfb4280d34af170a2b860b6ce82cc))
* remove players from the scoreboard when they disconnect ([39ff0e1](https://github.com/Real-Parkour-Helper/pkdutils/commit/39ff0e180563c36609887cecb6f97698cfa4b4e0))
* replace ALL empty lines with empty strings ([7ae87e1](https://github.com/Real-Parkour-Helper/pkdutils/commit/7ae87e12e45acfc8a293869498e7170026a5afc2))

# [1.8.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.7.0...v1.8.0) (2025-04-10)


### Bug Fixes

* detect boost using xp bar ([15e3a3b](https://github.com/Real-Parkour-Helper/pkdutils/commit/15e3a3b68e257bfbcba5737bf929d7fcaf033b69))
* only show +/- on PB splits (and PB!) if it is not the first time running the room ([34ed35c](https://github.com/Real-Parkour-Helper/pkdutils/commit/34ed35c4f572d6d30d93ed12ac9abf11042f3cb9))
* remove second space ([1f7fd42](https://github.com/Real-Parkour-Helper/pkdutils/commit/1f7fd4249f42a8a79e9dc56824fda8c5095b7854))
* track boosts with 60s left on xp bar instead of 61 ([16f2a6b](https://github.com/Real-Parkour-Helper/pkdutils/commit/16f2a6baee3a57eefd6e7b6ee1309abdadbee113))


### Features

* add a BoostInterceptor to log when the player boosts ([85083ec](https://github.com/Real-Parkour-Helper/pkdutils/commit/85083ec7cde90e85ca4ff8e28b87d15ff722a20f))
* add a simple split tracker that sends a message in chat ([16d3b23](https://github.com/Real-Parkour-Helper/pkdutils/commit/16d3b233b867cd6e99617ab184918c3384f68e54))
* add boost regions data ([e4e86e4](https://github.com/Real-Parkour-Helper/pkdutils/commit/e4e86e4eb7b47336e7f07de569d4d4aa12b41742))
* add default splits ([67d56af](https://github.com/Real-Parkour-Helper/pkdutils/commit/67d56af6ce2bdf4ec3889f87a2c5b4f7cfa0f3ac))
* capitalize room names in chat messages ([fce3f55](https://github.com/Real-Parkour-Helper/pkdutils/commit/fce3f55c3c1fac8838a6a9ca18e225da2638da03))
* determine which boost strategy was used ([3b34923](https://github.com/Real-Parkour-Helper/pkdutils/commit/3b34923306e7bc7eaed59e7d10d6ff1735e433ee))
* record player's position when they boost ([251e781](https://github.com/Real-Parkour-Helper/pkdutils/commit/251e781029ac5392e55233ba171732bb020f6c3f))
* save splits to a file ([8224db6](https://github.com/Real-Parkour-Helper/pkdutils/commit/8224db6037fe30c9f8e675d33218bd2a91dbc83c))
* track boost time ([e943388](https://github.com/Real-Parkour-Helper/pkdutils/commit/e9433885e8133c9ebdc382dea7b853fcb251ea94))

# [1.7.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.6.0...v1.7.0) (2025-04-07)


### Features

* run packet interceptors only in parkour duels by default (boolean in constructor) ([b4e67f3](https://github.com/Real-Parkour-Helper/pkdutils/commit/b4e67f38ff0b4e32bb1dd53d932025949b3f67c7))
* track location on hypixel ([5a7adb8](https://github.com/Real-Parkour-Helper/pkdutils/commit/5a7adb809cc296f4bf888c364f8356c4a1c67513))

# [1.6.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.5.1...v1.6.0) (2025-04-07)


### Features

* room data ([f01cd2c](https://github.com/Real-Parkour-Helper/pkdutils/commit/f01cd2c60f75f7c44bf37c3d2375684cb1c4e9c0))
* room identification module (simply stores rooms from the current run, does nothing with them yet) ([5a7f8d0](https://github.com/Real-Parkour-Helper/pkdutils/commit/5a7f8d0e676a93399fcc809c3443b8be69cbf1fa))

## [1.5.1](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.5.0...v1.5.1) (2025-04-05)


### Bug Fixes

* clear checkpoint data on respawn ([ddd7660](https://github.com/Real-Parkour-Helper/pkdutils/commit/ddd76609f02368303822476262e9d450e172f254))

# [1.5.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.4.0...v1.5.0) (2025-04-05)


### Features

* a miserable attempt at aligning numbers on the scoreboard ([592d599](https://github.com/Real-Parkour-Helper/pkdutils/commit/592d5999547ce849804e9801ba696fc09979af26))
* parse checkpoint info from the chat ([42d0e43](https://github.com/Real-Parkour-Helper/pkdutils/commit/42d0e43c15b82e230e2ed86b8d613a15622e1d18))
* send new scoreboard to the client ([27da16d](https://github.com/Real-Parkour-Helper/pkdutils/commit/27da16ddfcf81e07167e47195af08c158e36646f))

# [1.4.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.3.1...v1.4.0) (2025-04-05)


### Bug Fixes

* make toClient and toServer getters for the Packet class ([8296c91](https://github.com/Real-Parkour-Helper/pkdutils/commit/8296c913ac35226013d8236c496646623fee741b))


### Features

* create world tracking packet interceptor (doesn't do anything yet though) ([d74253c](https://github.com/Real-Parkour-Helper/pkdutils/commit/d74253c66657136a54fb31da8028e3fd5c7f93a9))
* track loaded chunks and provide easy access using world coordinates ([ed56d7a](https://github.com/Real-Parkour-Helper/pkdutils/commit/ed56d7a45c1919e770c66bf0fce01766b87f3882))

## [1.3.1](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.3.0...v1.3.1) (2025-04-04)


### Bug Fixes

* forgort to write to file after fixing instant connect proxy ([4cc7fb2](https://github.com/Real-Parkour-Helper/pkdutils/commit/4cc7fb2892a4888db92132d0b71004a6f8a3f7a5))

# [1.3.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.2.0...v1.3.0) (2025-04-04)


### Features

* patch instant-connext-proxy after installation ([6a11f46](https://github.com/Real-Parkour-Helper/pkdutils/commit/6a11f46af575fbeab80b03b53da65f704faca167))

# [1.2.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.1.0...v1.2.0) (2025-04-04)


### Bug Fixes

* remake package-lock.json ([061019d](https://github.com/Real-Parkour-Helper/pkdutils/commit/061019d525241ac7c292ce53105beb2eda62b279))


### Features

* compile script using pkg ([fcde23f](https://github.com/Real-Parkour-Helper/pkdutils/commit/fcde23ff8078931a535d6c19b70a853a75e71b7f))

# [1.1.0](https://github.com/Real-Parkour-Helper/pkdutils/compare/v1.0.0...v1.1.0) (2025-04-03)


### Bug Fixes

* add version tracking to interceptors ([3ecedda](https://github.com/Real-Parkour-Helper/pkdutils/commit/3ecedda29995d44f85f49ca7e836b747b7056828))
* don't only log on debug mode, add bold everywhere ([f0fb233](https://github.com/Real-Parkour-Helper/pkdutils/commit/f0fb233cb7d971a15fd72714194aba50251ea7f9))
* include src, exclude tests and node_modules from tsc ([36fd1ae](https://github.com/Real-Parkour-Helper/pkdutils/commit/36fd1ae1e556352b7360d109bab679952431ee5d))
* unbold, only probably is bold now ([db6b985](https://github.com/Real-Parkour-Helper/pkdutils/commit/db6b9858e5f1fc53394bb7b975ffd24f31649ce8))


### Features

* create custom Logger class ([dc2d481](https://github.com/Real-Parkour-Helper/pkdutils/commit/dc2d48117c1f65c4f96e42abbcc463c645be9875))
* create Packet wrapper and PacketInterceptor class ([72c8e22](https://github.com/Real-Parkour-Helper/pkdutils/commit/72c8e226993edbc1173f150bb35c26535c1a3cc6))
* modules dir index ([c66a340](https://github.com/Real-Parkour-Helper/pkdutils/commit/c66a34081db3e6b80e760de09786575ea172a7a2))
* run all packets through registered interceptors ([6c1f0ad](https://github.com/Real-Parkour-Helper/pkdutils/commit/6c1f0ad527d3608b65696d75129e7edc38fa2b7c))
* server list customization ([32a018a](https://github.com/Real-Parkour-Helper/pkdutils/commit/32a018ad3b62c0a139d0adfe12e605fdc373dfda))

# 1.0.0 (2025-04-03)


### Features

* first release ([be038a1](https://github.com/Real-Parkour-Helper/pkdutils/commit/be038a11830aa1b153bda919edc1994271601da9))
