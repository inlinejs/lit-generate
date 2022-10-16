[DRAFT] lit-generate
=================

CLI to generate new Lit Web Components. 

> This is a work in progress and will not be stable or probably do much of anything until a `0.1.0`. release.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lit-generate.svg)](https://npmjs.org/package/lit-generate)
[![Downloads/week](https://img.shields.io/npm/dw/lit-generate.svg)](https://npmjs.org/package/lit-generate)
[![License](https://img.shields.io/npm/l/lit-generate.svg)](https://github.com/inlinejs/lit-generate/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lit-generate
$ lit-generate COMMAND
running command...
$ lit-generate (--version)
lit-generate/0.0.2 darwin-x64 node-v18.8.0
$ lit-generate --help [COMMAND]
USAGE
  $ lit-generate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [[DRAFT] lit-generate](#draft-lit-generate)
- [Usage](#usage)
- [Commands](#commands)
  - [`lit-generate component`](#lit-generate-component)
  - [`lit-generate help [COMMAND]`](#lit-generate-help-command)
  - [`lit-generate plugins`](#lit-generate-plugins)
  - [`lit-generate plugins:install PLUGIN...`](#lit-generate-pluginsinstall-plugin)
  - [`lit-generate plugins:inspect PLUGIN...`](#lit-generate-pluginsinspect-plugin)
  - [`lit-generate plugins:install PLUGIN...`](#lit-generate-pluginsinstall-plugin-1)
  - [`lit-generate plugins:link PLUGIN`](#lit-generate-pluginslink-plugin)
  - [`lit-generate plugins:uninstall PLUGIN...`](#lit-generate-pluginsuninstall-plugin)
  - [`lit-generate plugins:uninstall PLUGIN...`](#lit-generate-pluginsuninstall-plugin-1)
  - [`lit-generate plugins:uninstall PLUGIN...`](#lit-generate-pluginsuninstall-plugin-2)
  - [`lit-generate plugins update`](#lit-generate-plugins-update)

## `lit-generate component`

Creates a new Lit Web Component.

```
USAGE
  $ lit-generate component

DESCRIPTION
  Creates a new Lit Web Component.

EXAMPLES
  $ lit-generate component
```

_See code: [dist/commands/component.ts](https://github.com/inlinejs/lit-generate/blob/v0.0.2/dist/commands/component.ts)_

## `lit-generate help [COMMAND]`

Display help for lit-generate.

```
USAGE
  $ lit-generate help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lit-generate.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `lit-generate plugins`

List installed plugins.

```
USAGE
  $ lit-generate plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lit-generate plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `lit-generate plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lit-generate plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lit-generate plugins add

EXAMPLES
  $ lit-generate plugins:install myplugin 

  $ lit-generate plugins:install https://github.com/someuser/someplugin

  $ lit-generate plugins:install someuser/someplugin
```

## `lit-generate plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lit-generate plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lit-generate plugins:inspect myplugin
```

## `lit-generate plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lit-generate plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ lit-generate plugins add

EXAMPLES
  $ lit-generate plugins:install myplugin 

  $ lit-generate plugins:install https://github.com/someuser/someplugin

  $ lit-generate plugins:install someuser/someplugin
```

## `lit-generate plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ lit-generate plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ lit-generate plugins:link myplugin
```

## `lit-generate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lit-generate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit-generate plugins unlink
  $ lit-generate plugins remove
```

## `lit-generate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lit-generate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit-generate plugins unlink
  $ lit-generate plugins remove
```

## `lit-generate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lit-generate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lit-generate plugins unlink
  $ lit-generate plugins remove
```

## `lit-generate plugins update`

Update installed plugins.

```
USAGE
  $ lit-generate plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
