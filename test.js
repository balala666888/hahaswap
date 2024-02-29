var assert = require('assert')
var swap = require('./index')

assert.equal(swap('hah'), 'hah')
assert.equal(swap('{}'), '{}')
assert.equal(swap('{ hah }'), '{ hah }')

assert.equal(swap('{hah}'), '')
assert.equal(swap('{hah}', 'hah'), '')
assert.equal(swap('{hah}', 12), '')
assert.equal(swap('{hah}', {dave: 'anne'}), '')

assert.equal(swap('{hah}', {hah: 'anne'}), 'anne')
assert.equal(swap('{hah} and {dave}', {hah: 'anne', dave: 'sue'}), 'anne and sue')
assert.equal(swap('{hah}', {hah: {xox: 'hello'}}), '[object Object]')
assert.equal(swap('{hah.xox}', {hah: {xox: 'hello'}}), '{hah.xox}')
assert.equal(swap('{hah}', {hah: [1, 2, 3]}), '1,2,3')

assert.equal(swap('{!hah!}', {hah: 'anne'}), '')
assert.equal(swap('{!{hah} and others!} arrived', {hah: 'anne'}), ' arrived')
assert.equal(swap('{hah}{!and others!} arrived', {hah: 'anne'}), 'anne arrived')
assert.equal(swap('{!hah!} and {!others!}', {hah: 'anne'}), ' and ')

assert.equal(swap('\\{hah}'), '{hah}')
assert.equal(swap('\\\\{hah}'), '\\{hah}')
assert.equal(swap('\\{!hah!}'), '{!hah!}')
