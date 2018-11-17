import {BaseError} from "./base-error";

export class IllegalArgumentError extends BaseError {
    constructor (public message: string) {
        super();
    }
}