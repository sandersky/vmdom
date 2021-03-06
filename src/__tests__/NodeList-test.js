import Node from '../Node'
import NodeList from '../NodeList'

describe('NodeList', () => {
  let instance

  describe('when instantiated with empty nodes argument', () => {
    beforeEach(() => {
      instance = new NodeList([])
    })

    it('should have expected length and enumerables', () => {
      expect(instance).toHaveLength(0)
      expect(instance).toHaveEnumerables([])
    })

    it('should not allow length property to be overwritten', () => {
      expect((instance.length = 5)).toBe(5)
      expect(instance.length).toBe(0)
    })

    it('should return undefined for unknown properties', () => {
      expect(instance.foo).toBe(undefined)
      expect(instance[true]).toBe(undefined)
      expect(instance[Symbol('foo')]).toBe(undefined)
    })

    it('should allow adding additional properties', () => {
      expect((instance.foo = 'bar')).toBe('bar')
      expect(instance.foo).toBe('bar')
    })
  })

  describe('when instantiated with one node', () => {
    beforeEach(() => {
      instance = new NodeList([new Node()])
    })

    it('should have expected length and enumerables', () => {
      expect(instance).toHaveLength(1)
      expect(instance).toHaveEnumerables([])
    })

    it('should not allow length property to be overwritten', () => {
      expect((instance.length = 5)).toBe(5)
      expect(instance.length).toBe(1)
    })
  })

  describe('when instantiated with two nodes', () => {
    beforeEach(() => {
      instance = new NodeList([new Node(), new Node()])
    })

    it('should have expected length and enumerables', () => {
      expect(instance).toHaveLength(2)
      expect(instance).toHaveEnumerables([])
    })

    it('should not allow length property to be overwritten', () => {
      expect((instance.length = 5)).toBe(5)
      expect(instance.length).toBe(2)
    })
  })
})
