/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package au.com.rheem.facades.populators;

import de.hybris.platform.converters.Populator;
import au.com.rheem.facades.product.data.GenderData;
import de.hybris.platform.core.enums.Gender;
import de.hybris.platform.servicelayer.type.TypeService;

import org.springframework.beans.factory.annotation.Required;

/**
 * Populates {@link GenderData} with name and code.
 */
public class GenderDataPopulator implements Populator<Gender, GenderData>
{
	private TypeService typeService;

	protected TypeService getTypeService()
	{
		return typeService;
	}

	@Required
	public void setTypeService(final TypeService typeService)
	{
		this.typeService = typeService;
	}

	@Override
	public void populate(final Gender source, final GenderData target)
	{
		target.setCode(source.getCode());
		target.setName(getTypeService().getEnumerationValue(source).getName());
	}
}
