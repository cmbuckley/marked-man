const { marked } = require('marked');

const renderer = {
    blockquote(quote) {
        return `.QP\n${quote}\n.\n`;
    }

    code(text, infostring, escaped) {
		return `.P\n.RS 2\n.nf\n${text}\n.fi\n.RE\n`;
    }

    heading(text, level) {
        const macro = {1: 'TH', 2: 'SH'}[level] || 'SS';
        return `.${macro} ${text}\n`;
    }

    hr() {
        return '.HR\n';
    }

    list(body, ordered, start) {
        return `.RS\n${body}\n.RE\n`;
    }

    paragraph(text) {
		return `.P\n${text}\n`;
    }

    table(header, body) {
    }
};

marked.use({ renderer });
