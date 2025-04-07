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
