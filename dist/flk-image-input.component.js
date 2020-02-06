class ImageInput {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        // internal properties
        this.error = null;   
        this.fileInput = null; 
        this._formHandler = null;
        this.errorClasses = 'error-msg';
        this.defaultImagePreview = config('form.imagePreview');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.imageSrc = this.prop('src') || this.defaultImagePreview;
        this.imageTitle = trans('select-image');
        this.onChange = this.event('change');
        this.imageLabel = this.prop('label');

        if (this.imageLabel) {
            this.imageLabel = trans(this.imageLabel);
        }
    } 

    /**
     * Get image title
     * 
     * @returns string
     */
    getImageTitle() {
        return this.prop('title') || this.imageTitle;
    }

    /**
     * validate the file input
     */
    validate() {
        if (this.inputs.prop('required') !== null && Is.empty(this.fileInput.files) && this.imageSrc == this.defaultImagePreview) {
            this._formHandler.addError(this.prop('name'), 'required', trans('validation.required'));
            this.error = trans('validation.required');            
        } else {
            this.removeError();
        }
    }

    /**
     * Remove the error
     */
    removeError() {
        this.error = null;
        this._formHandler.removeError(this.prop('name'));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        this.fileInput.addEventListener('change', e => {
            if (this.fileInput.files && this.fileInput.files[0]) {
                let file = this.fileInput.files[0],
                    reader = new FileReader();

                reader.onload = e => {
                    this.imageSrc = e.target.result;
                    this.imageTitle = file.name;
                    this.onChange({
                        file,
                        fileName: file.name,
                        files: this.fileInput.files,
                        event: e,
                        target: e.target,
                        src: this.imageSrc
                    });
                }

                reader.readAsDataURL(file);
            }
        });

        this._formHandler = this.fileInput.form.formHandler;
    }

    /**
     * Reset the file input value
     */
    reset() {
        this.fileInput.value = '';

        this.imageSrc = this.defaultImagePreview; 
    }

    /**
     * Select image
     */
    selectImage() {
        this.fileInput.click();
    }

    /**
     * Get input name
     */
    getName() {
        return this.name || Object.get(this.inputs, 'attrs.name');
    }
}