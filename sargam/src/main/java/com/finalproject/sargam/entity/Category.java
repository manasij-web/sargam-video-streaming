package com.finalproject.sargam.entity;

import java.util.HashMap;
import java.util.Map;

public enum Category {
    	SAD(0),
    ROMANTIC(1),
    RELIGIOUS(2),
    PATRIOTIC(3),
    HAPPY(4),
    LIGHT_MUSIC(5);

    private int value;
    private static Map map = new HashMap<>();

    private Category(int value) {
        this.value = value;
    }

    static {
        for (Category category : Category.values()) {
            map.put(category.value, category);
        }
    }

    public static Category valueOf(int category) {
        return (Category) map.get(category);
    }

    public int getValue() {
        return value;
    }
}
