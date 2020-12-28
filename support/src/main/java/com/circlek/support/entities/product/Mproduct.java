package com.circlek.support.entities.product;

import java.math.BigDecimal;

public class Mproduct {
    private String itemcode;
    private String itemName;
    private BigDecimal price;

    public Mproduct() {
    }

    public String getItemcode() {
        return itemcode;
    }

    public void setItemcode(String itemcode) {
        this.itemcode = itemcode.trim();
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName.trim();
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
