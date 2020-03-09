
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFExport } from '@progress/kendo-react-pdf';

import Content from './content.jsx';

class App extends React.Component {
    pdfExportComponent;

    render() {

        // https://www.telerik.com/kendo-react-ui/components/pdfprocessing/api/PDFExportProps/

        return (
            <div>
                <div className="example-config">
                    <button className="k-button" onClick={() => { this.pdfExportComponent.save(); }}>
                        Export Minim PDF
                    </button>
                </div>

                <PDFExport
                    keepTogether="p"
                    paperSize="A4"
                    margin="2cm"
                    ref={(component) => this.pdfExportComponent = component}
                >
                    <Content />
                </PDFExport>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

/*
author? string
The author (metadata) of the PDF document.

avoidLinks? boolean | string
A flag that indicates whether to produce actual hyperlinks in the exported PDF file. It is also possible to set a CSS selector. All matching links will be ignored.

creator? string
The creator of the PDF document. Defaults to Kendo UI PDF Generator.

date? Date
The date when the PDF document is created. Defaults to new Date().

fileName? string
Specifies the name of the exported PDF file. Defaults to export.pdf.

forcePageBreak? string
An optional CSS selector that specifies the elements which cause the page breaks.

forceProxy? boolean
If set to true, the content is forwarded to proxyURL even if the browser supports local saving of files.

imageResolution? number
The forced resolution of the images in the exported PDF document. By default, the images are exported at their full resolution.

keepTogether? string
An optional CSS selector that specifies the elements which should not be split across the pages.

keywords? string
The keywords (metadata) of the PDF document.

landscape? boolean
A flag that indicates if the page will be in a landscape orientation. By default, the page is in a portrait orientation. Defaults to false.

margin? string | number | PageMargin
Specifies the margins of the page.

The supported units are:

"mm"
"cm"
"in"
"pt" (default).
Numbers are considered to be points ("pt").

pageTemplate? any
A React functional or class component which is used as a template that is inserted into each page of the PDF document. The number of the current page (pageNum) and the total number of pages (totalPages) are passed to the component as properties.

paperSize? PaperSize
Specifies the paper size of the PDF document. Defaults to "auto" which means that the paper size is determined by the content. The size of the content in pixels matches the size of the output in points (1 pixel = 1/72 inch).

If set, the content will be split across multiple pages. This enables the repeatHeaders and scale options, and allows you to specify a template.

The supported values are:

A predefined size. The supported paper sizes are: A0-A10, B0-B10, C0-C10, Executive, Folio, Legal, Letter, Tabloid.
An array of two numbers which specify the width and height in points (1pt = 1/72in).
An array of two strings which specify the width and height in units. The supported units are "mm", "cm", "in", and "pt".
producer? string
The producer (metadata) of the PDF document.

proxyData? {[key: string]: string}
A key/value dictionary of form values which will be sent to the proxy. Can be used to submit Anti-Forgery tokens and other metadata.

proxyTarget? string
A name or keyword which indicates where to display the document that is returned from the proxy. To display the document in a new window or iframe, the proxy has to have the "Content-Disposition" header set to inline; filename="<fileName.pdf>". Defaults to _self.

proxyURL? string
The URL of the server-side proxy which streams the file to the end user. You need to use a proxy if the browser is not capable of saving files locally—for example, Internet Explorer 9 and Safari. It is your responsibility to implement the server-side proxy.

In the request body, the proxy receives a POST request with the following parameters:

"contentType"—The MIME type of the file.
"base64"—The base-64 encoded file content.
"fileName"—The file name, as requested by the caller.
The proxy returns the decoded file with the "Content-Disposition" header set to attachment; filename="<fileName.pdf>".

repeatHeaders? boolean
Specifies if the <thead> elements of the tables will be repeated on each page.

scale? number
A scale factor. The text size on the screen might be too big for printing. To scale down the output in PDF, use this option. Defaults to 1.

subject? string
The subject (metadata) of the PDF document.

title? string
The title (metadata) of the PDF document.
 */

