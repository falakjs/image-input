const Component = require(COMPONENT_CLASS_PATH);

class ImageInputComponent extends Component {}

module.exports = {
    selector: 'flk-image-input',
    isChild: false,
    handler: ImageInputComponent,
    isUnique: false,
    component: 'ImageInput',
    htmlFile: __dirname + '/../../flk-image-input.component.html',
};