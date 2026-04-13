import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  props2: number;
  props3: Date;
};

function uuidValidate(uuid: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
  return regex.test(uuid);
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
  it('Should set props and id', () => {
    const props = {
      prop1: 'value1',
      props2: 3,
      props3: new Date(),
    };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).not.toBeNull();
  });

  it('Should set id', () => {
    const props = {
      prop1: 'value1',
      props2: 3,
      props3: new Date(),
    };
    const id = '70819498-a352-4c40-a0d1-68d00ea0523a';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(id)).not.toBeNull();
    expect(entity.id).toBe(id);
  });

  it('Should convert a entity to a JavaScript Object', () => {
    const props = {
      prop1: 'value1',
      props2: 3,
      props3: new Date(),
    };
    const id = '70819498-a352-4c40-a0d1-68d00ea0523a';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
