package com.circlek.support.entities.promotion;

import java.math.BigDecimal;
import java.util.Date;

public class PromotionStore {
    private String pm_promo;
    private String pm_type;
    private String pm_code;
    private Date pm_effdate;
    private Date pm_expdate;
    private String pm_unit;
    private Character pm_disctp;
    private BigDecimal pm_discval;
    private BigDecimal pm_points;
    private int pm_qtysale;
    private int pm_qtysold;
    private BigDecimal pm_qtycus;
    private String pm_othinfo;
    private String pm_stid;

    public PromotionStore() {
    }

    public String getPm_type() {
        return pm_type;
    }

    public void setPm_type(String pm_type) {
        this.pm_type = pm_type.trim();
    }

    public String getPm_code() {
        return pm_code;
    }

    public void setPm_code(String pm_code) {
        this.pm_code = pm_code.trim();
    }

    public Date getPm_effdate() {
        return pm_effdate;
    }

    public void setPm_effdate(Date pm_effdate) {
        this.pm_effdate = pm_effdate;
    }

    public Date getPm_expdate() {
        return pm_expdate;
    }

    public void setPm_expdate(Date pm_expdate) {
        this.pm_expdate = pm_expdate;
    }

    public String getPm_unit() {
        return pm_unit;
    }

    public void setPm_unit(String pm_unit) {
        this.pm_unit = pm_unit.trim();
    }

    public Character getPm_disctp() {
        return pm_disctp;
    }

    public void setPm_disctp(Character pm_disctp) {
        this.pm_disctp = pm_disctp;
    }

    public BigDecimal getPm_discval() {
        return pm_discval;
    }

    public void setPm_discval(BigDecimal pm_discval) {
        this.pm_discval = pm_discval;
    }

    public BigDecimal getPm_points() {
        return pm_points;
    }

    public void setPm_points(BigDecimal pm_points) {
        this.pm_points = pm_points;
    }

    public int getPm_qtysale() {
        return pm_qtysale;
    }

    public void setPm_qtysale(int pm_qtysale) {
        this.pm_qtysale = pm_qtysale;
    }

    public int getPm_qtysold() {
        return pm_qtysold;
    }

    public void setPm_qtysold(int pm_qtysold) {
        this.pm_qtysold = pm_qtysold;
    }

    public BigDecimal getPm_qtycus() {
        return pm_qtycus;
    }

    public void setPm_qtycus(BigDecimal pm_qtycus) {
        this.pm_qtycus = pm_qtycus;
    }

    public String getPm_othinfo() {
        return pm_othinfo;
    }

    public void setPm_othinfo(String pm_othinfo) {
        this.pm_othinfo = pm_othinfo.trim();
    }

    public String getPm_stid() {
        return pm_stid;
    }

    public void setPm_stid(String pm_stid) {
        this.pm_stid = pm_stid.trim();
    }

    public String getPm_promo() {
        return pm_promo;
    }

    public void setPm_promo(String pm_promo) {
        this.pm_promo = pm_promo.trim();
    }
}
