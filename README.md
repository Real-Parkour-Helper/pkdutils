# Hypixel Parkour Duels Utilities

A Minecraft proxy server that enhances the Hypixel Parkour Duels experience with advanced tracking, customization, and analytics.

## Features

- **Room Detection**: Automatically identifies which room you're in
- **Split Tracker**: Records and saves your best splits for each room, with and without boosts
- **Boost Analysis**: Tracks where and when you use boosts, suggesting optimal boost strategies
- **Custom Scoreboard Modes**: Choose between different scoreboard displays:
  - Default Hypixel scoreboard
  - All players with their checkpoint numbers
  - Advanced splits showing time differences between players
- **Seed Calculation**: Calculates and recommends the best boost strategies for the seed you played

## Usage

- Head to [releases](https://github.com/Real-Parkour-Helper/pkdutils/releases) and download the latest version for your operating system.

  - note: Linux and macOS executables aren't really tested, so have fun!

- Put the downloaded executable in a folder of your choice and run it. If all goes well, you should see a message saying "Proxy started! Listening on port 25565."
- Add a server with the IP `localhost` and connect to it.

  - check the program window again. On your first login it likely ask you to sign in to your Microsoft account. Follow the login instructions there and join the minecraft server again. [Why do I need to sign in?](#Why-do-I-need-to-sign-in)

- Go get some sub 2s!

To stop the proxy, close the program window. You will be disconnected from hypixel if you're still logged on.

### Commands

| Command              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `/parkour` or `/pkd` | Join Parkour Duels directly                              |
| `/scoreboard <mode>` | Change the scoreboard mode (default, allplayers, splits) |

### Split Analytics

When you complete a room, the proxy will show you:

- Your time for that room
- Whether it's a personal best
- If you used a boost, which strat you used
- Time comparison with your personal best

When you complete a run, the proxy will calculate:

- Best possible time with calc splits
- Which rooms you should boost in
- Pacelock warnings

- Best possible time with _your_ splits
- Which rooms you should boost in with _your_ splits
- Pacelock warnings (yeah, with _your_ splits)

## Why do I need to sign in?

Minecraft's protocol is encrypted to help keep everyone secure. When you join a server like Hypixel, your client, Hypixel, and Mojang all agree to an encryption scheme. Nothing between you and Hypixel will be able to read what's being sent or modify it because of that encryption. In order for this proxy to work, it has to sit between you and Hypixel, and it has to decrypt and re-encrypt everything being sent. In order to re-encrypt everything going out to Hypixel, this needs to login to Hypixel. It can't do that unless you give it access.
Your login information is not sent to anything except Mojang/Microsoft. If you don't trust this code and can't review it yourself, don't run it.

## Configuration

Split data is automatically saved to `./data/splits.json` and can be manually edited if needed.

## Requirements

- Minecraft Java Edition 1.8.9

## Disclaimer

This project is not affiliated with Mojang, Microsoft, or Hypixel. Use at your own risk. While the proxy follows Hypixel's rules by not providing unfair advantages, using any third-party tool always carries some risk.
