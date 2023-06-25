import {z} from "zod";

export const BEANLINK_RE = /^https:\/\/beanl.ink\/l\/.*$/;
const BEANCONQUEROR_RE = /^https:\/\/(?:www\.)?beanconqueror.com\/?\?.*$/;
const ANYLINK_RE = /^(https:\/\/beanl.ink\/l\/.*)|(https:\/\/(?:www\.)?beanconqueror.com\/?\?.*)$/;

const beanLinkUrl = z.string().regex(BEANLINK_RE, {message: "Provide a valid Beanlink url"});
const beanconquerorUrl = z.string().regex(BEANCONQUEROR_RE, {message: "Provide a valid Beanconqueror url"});
const anyLinkUrl = z.string().regex(ANYLINK_RE, {message: "Provide a valid Beanconqueror or Beanlink url"});

export const shortenLinkSchema = z.object({
    link: beanconquerorUrl,
});

export const viewLinkSchema = z.object({
    link: anyLinkUrl,
})