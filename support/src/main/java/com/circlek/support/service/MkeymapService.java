package com.circlek.support.service;

import com.circlek.support.entities.mkeymap.MkeymapServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MkeymapService {
    @Autowired
    private EntityManager entityManager;

    public List<MkeymapServer> getAllMkeymap(){
        List<MkeymapServer> mkeymapServers = new ArrayList<>();
        try {
            Query query = entityManager.createNativeQuery("SELECT [km_text],[km_paramtr],[km_crdate],[km_lastupd],[km_stid] from [HO].[HOVQPBOS_HANOI].[dbo].[mkeymap]");
            List<Object[]> responseServer = query.getResultList();

            for (Object[] obj: responseServer
                 ) {
                MkeymapServer mkeymapServer = new MkeymapServer();
                mkeymapServer.setText((String) obj[0]);
                mkeymapServer.setItemcode((String) obj[1]);
                mkeymapServer.setCreateDate((Date) obj[2]);
                mkeymapServer.setUpdateDate((Date) obj[3]);
                mkeymapServer.setStore((String) obj[4]);
                mkeymapServers.add(mkeymapServer);
            }

        }catch (Exception ex){

        }
        return mkeymapServers;
    }
}
