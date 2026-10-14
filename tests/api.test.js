import test from 'node:test';import assert from 'node:assert/strict';import{validate,extractJson,sanitizeAnalysis}from '../api/analyze.js';
test('accepts arbitrary non-AI thesis',()=>assert.equal(validate({mode:'analyze',thesis:'Consumer goods investments are back.'}),null));
test('rejects invalid mode and thesis',()=>{assert.match(validate({mode:'oops',thesis:'anything'}),/Invalid/);assert.match(validate({mode:'analyze',thesis:'Hi'}),/thesis/)});
test('requires follow-up question',()=>assert.match(validate({mode:'followup',thesis:'Investment into consumer goods rebounds'}),/question/));
test('parses fenced JSON',()=>assert.deepEqual(extractJson('```json\n{"for":[],"against":[]}\n```'),{for:[],against:[]}));
test('sanitizes bad source IDs',()=>{const a=sanitizeAnalysis({for:[{point:'For',source_ids:[999]}],against:[]},[]);assert.deepEqual(a.for[0].sources,[])});
