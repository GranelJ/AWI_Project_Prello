import { Mongo } from 'meteor/mongo'

export const Boards = new Mongo.Collection('boards')

import SimpleSchema from 'simpl-schema';
import {ListSchema} from "./List";
import { BoardUserSchema } from './BoardUser';
import {CardSchema} from "./Card";

export const BoardSchema = new SimpleSchema({
  _id: {
      type: String,
      optional: true
  },
  boardTitle: {
      type: String,
      label: "Title",
      required: true
  },
  boardDescription: {
      type: String,
      label: "Description",
      required: false
  },
  boardUsers: {
      type: Array,
      label: "Users",
      required: true
  },
  'boardUsers.$': BoardUserSchema, //se if need to replace Object with a schema
  boardPrivacy: {
      type: SimpleSchema.Integer,
      label: "Privacy",
      required: true
  },
  boardLists: {
      type: Array,
      label: "Lists",
      defaultValue: [],
  },
  'boardLists.$': ListSchema, //se if need to replace Object with a schema
  /*boardTags: {
      type: Array,
      label: "Tags",
      defaultValue: []
  },
  'boardTags.$': Object, //se if need to replace Object with a schema
  boardTeams: {
      type: Array,
      label: "Teams",
      defaultValue: []
  },
  'boardTeams.$': Object,*/ //se if need to replace Object with a schema
  boardCreatedAt:{
      type: Date,
      autoValue: function(){return new Date();}
  }
});

Boards.attachSchema(BoardSchema,{transform: true});