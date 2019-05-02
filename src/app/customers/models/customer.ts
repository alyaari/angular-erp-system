import { CustomerType } from '../enums/customer-type.enum';
import { Model } from '../../core/decorators/model.decorator';
import { ModelProperty } from '../../core/decorators/property.decorator';
import { BaseModel } from '../../core/models/base.model';

@Model({
  name: 'Customer',
  collectionName: 'customers'
})
export class Customer extends BaseModel {

  @ModelProperty()
  name: string;
  @ModelProperty()
  number: string;
  @ModelProperty()
  type: CustomerType;
  @ModelProperty()
  phone: string;
  @ModelProperty()
  email: string;
  @ModelProperty()
  address: string;
  @ModelProperty()
  notes: string;
}
