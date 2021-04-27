/* eslint-disable */
const { Plugin } = require('powercord/entities');
const {
  smallLetters,
  smallerLetters,
  flipLetters,
  fullWidthLetters,
} = require('./maps');
module.exports = class Texter extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: 'fw',
      description: 'ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ',
      usage: '{c} [Text you want to flip]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').fullWidth(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'fullwidth',
      description: 'ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ',
      usage: '{c} [Text you want to flip]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').fullWidth(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'shrug',
      description: 'appends ¯\\_(ツ)_/¯ to you message',
      usage: '{c} [.shrug]',
      executor: (args) => ({
        send: true,
        result: args.join(' ') + '¯\\_(ツ)_/¯',
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'small',
      description: 'makes your text smaller',
      usage: '{c} [text that you want to make small]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').small(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'smaller',
      description: 'Makes your text tiny',
      usage: '{c} [tiny input]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').smaller(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'reverse',
      description: 'Reverse some text',
      usage: '{c} [text to reverse!]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').split('').reverse().join(''),
      }),
    });
    powercord.api.commands.registerCommand({
      command: 'reflip',
      description: 'reflips your text',
      usage: '{c} [text to reflip!]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').split('').reverse().join('').flip(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'clap',
      description: 'adds clap emojis to your text',
      usage: '{c} [Text to clap]',
      executor: (args) => ({
        send: true,
        result: '👏' + args.join('👏') + '👏',
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'flip',
      description: 'flips your text',
      usage: '{c} [input]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').flip(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'space',
      description:
        'Like .clap except it lets you pick anything you want to put inbetween the words.',
      usage: '{c} [space <char> [sentence...]]',
      executor: (args) => ({
        send: true,
        result: space(args),
      }),
    });
  }

  pluginWillUnload() {
    for (const command of [
      'flip',
      'fw',
      'clap',
      'reflip',
      'reverse',
      'small',
      'smaller',
      'shrug',
      'fullwidth',
    ]) {
      powercord.api.commands.unregisterCommand(command);
    }
  }
};

function space(args) {
  const char = args[0];
  const str = args.slice(1).join(char);
  return str + char;
}

/**
 * @returns ǫ ᴡ ᴇ ʀ ᴛ ʏ ᴜ ɪ ᴏ ᴘ ᴀ s ᴅ ꜰ ɢ ʜ ᴊ ᴋ ʟ ᴢ x ᴄ ᴠ ʙ ɴ ᴍ
 */
String.prototype.small = function () {
  return [...this.toLowerCase()].map((l) => smallLetters[l] || l).join('');
};

/**
 * @returns ᑫ ʷ ᵉ ʳ ᵗ ʸ ᵘ ᶦ ᵒ ᵖ ᵃ ˢ ᵈ ᶠ ᵍ ʰ ʲ ᵏ ˡ ᶻ ˣ ᶜ ᵛ ᵇ ⁿ ᵐ
 */
String.prototype.smaller = function () {
  return [...this.toLowerCase()].map((l) => smallerLetters[l] || l).join('');
};

/**
 * @returns q ʍ ǝ ɹ ʇ ʎ u ı o d ɐ s d ɟ ƃ ɥ ɾ ʞ l z x ɔ ʌ q u ɯ
 */
String.prototype.flip = function () {
  return [...this.toLowerCase()].map((l) => flipLetters[l] || l).join('');
};

/**
 * @returns ｑ　ｗ　ｅ　ｒ　ｔ　ｙ　ｕ　ｉ　ｏ　ｐ　ａ　ｓ　ｄ　ｆ　ｇ　ｈ　ｊ　ｋ　ｌ　ｚ　ｘ　ｃ　ｖ　ｂ　ｎ　ｍ || Ｑ　Ｗ　Ｅ　Ｒ　Ｔ　Ｙ　Ｕ　Ｉ　Ｏ　Ｐ　Ａ　Ｓ　Ｄ　Ｆ　Ｇ　Ｈ　Ｊ　Ｋ　Ｌ　Ｚ　Ｘ　Ｃ　Ｖ　Ｂ　Ｎ　Ｍ
 */
String.prototype.fullWidth = function () {
  return [...this].map((l) => fullWidthLetters[l] || l).join('');
};
